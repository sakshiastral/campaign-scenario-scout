import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cva, type VariantProps } from "class-variance-authority";

const statCardVariants = cva(
  "transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-card hover:shadow-card",
        success: "bg-gradient-to-br from-analytics-success/10 to-analytics-success/5 border-analytics-success/20",
        warning: "bg-gradient-to-br from-analytics-warning/10 to-analytics-warning/5 border-analytics-warning/20",
        danger: "bg-gradient-to-br from-analytics-danger/10 to-analytics-danger/5 border-analytics-danger/20",
        info: "bg-gradient-to-br from-analytics-info/10 to-analytics-info/5 border-analytics-info/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const statValueVariants = cva(
  "text-2xl font-bold",
  {
    variants: {
      variant: {
        default: "text-foreground",
        success: "text-analytics-success",
        warning: "text-analytics-warning",
        danger: "text-analytics-danger",
        info: "text-analytics-info",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface StatCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statCardVariants> {
  title: string;
  value: string | number;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, variant, title, value, description, trend, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(statCardVariants({ variant }), className)}
        {...props}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          {trend && (
            <div className={cn(
              "text-xs font-medium px-2 py-1 rounded-full",
              trend.isPositive
                ? "text-analytics-success bg-analytics-success/10"
                : "text-analytics-danger bg-analytics-danger/10"
            )}>
              {trend.isPositive ? "+" : ""}{trend.value}%
            </div>
          )}
        </CardHeader>
        <CardContent>
          <div className={cn(statValueVariants({ variant }))}>
            {value}
          </div>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">
              {description}
            </p>
          )}
        </CardContent>
      </Card>
    );
  }
);

StatCard.displayName = "StatCard";

export { StatCard, statCardVariants };