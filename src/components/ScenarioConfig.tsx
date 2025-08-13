import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings, Plus, CheckCircle, AlertCircle, XCircle } from "lucide-react";

export const ScenarioConfig = () => {
  const scenarioCategories = [
    {
      title: "Participation / Exposure Scenarios",
      description: "Track how outlets/users interacted with the campaign",
      scenarios: [
        {
          name: "Reached & Engaged",
          description: "Audience member interacted with campaign (opened, clicked, redeemed)",
          status: "active",
          count: "29,342"
        },
        {
          name: "Reached & Not Engaged", 
          description: "In campaign audience but didn't interact",
          status: "active",
          count: "96,090"
        },
        {
          name: "Not Reached (Control)",
          description: "Not in campaign audience - acts as control group",
          status: "active", 
          count: "24,568"
        }
      ]
    },
    {
      title: "Sales & Behaviour Change Scenarios",
      description: "Compare pre-campaign vs campaign vs post-campaign behaviors",
      scenarios: [
        {
          name: "New Activation",
          description: "Outlet started buying after the campaign",
          status: "active",
          count: "3,247"
        },
        {
          name: "Reactivation",
          description: "Lapsed outlet started buying again",
          status: "active",
          count: "1,892"
        },
        {
          name: "Upsell",
          description: "Existing buyer increased order value/volume",
          status: "active",
          count: "8,934"
        },
        {
          name: "Cross-sell",
          description: "Outlet purchased new product category",
          status: "active",
          count: "5,123"
        },
        {
          name: "No Change",
          description: "Buying pattern same as before",
          status: "warning",
          count: "67,234"
        },
        {
          name: "Drop-off",
          description: "Reduced/stopped buying after campaign",
          status: "inactive",
          count: "2,156"
        }
      ]
    },
    {
      title: "Control vs Test Group Scenarios",
      description: "Compare campaign audience against similar control groups",
      scenarios: [
        {
          name: "Positive Lift",
          description: "Test group outperforms control in target KPI",
          status: "active",
          count: "Test: +23.4%"
        },
        {
          name: "Neutral Effect", 
          description: "No significant difference between groups",
          status: "warning",
          count: "±2.1%"
        },
        {
          name: "Negative Lift",
          description: "Test group performs worse than control",
          status: "inactive",
          count: "Test: -5.2%"
        }
      ]
    },
    {
      title: "Redemption / Response Based",
      description: "Track specific campaign actions and their outcomes",
      scenarios: [
        {
          name: "Redeemed & Increased Sales",
          description: "Used offer and bought more than baseline",
          status: "active",
          count: "7,456"
        },
        {
          name: "Redeemed Only",
          description: "Used offer but no increase in overall sales",
          status: "warning",
          count: "12,234"
        },
        {
          name: "No Redeem but Increased Sales",
          description: "Campaign influenced indirectly without redemption",
          status: "active", 
          count: "15,678"
        },
        {
          name: "No Redeem & No Change",
          description: "No redemption and no impact",
          status: "inactive",
          count: "89,432"
        }
      ]
    },
    {
      title: "Time-Decay Response",
      description: "Measure sustained effects over time periods",
      scenarios: [
        {
          name: "Immediate Spike",
          description: "Sales rose during campaign but dropped after",
          status: "warning",
          count: "34.2% of respondents"
        },
        {
          name: "Sustained Growth",
          description: "Positive effect continued post-campaign",
          status: "active",
          count: "18.7% of respondents"
        },
        {
          name: "Delayed Impact",
          description: "Effect seen only after lag period",
          status: "active",
          count: "12.3% of respondents"
        },
        {
          name: "No Effect",
          description: "Flat performance before, during, and after",
          status: "inactive",
          count: "34.8% of respondents"
        }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-analytics-success" />;
      case "warning":
        return <AlertCircle className="h-4 w-4 text-analytics-warning" />;
      case "inactive":
        return <XCircle className="h-4 w-4 text-analytics-danger" />;
      default:
        return null;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "active":
        return "default";
      case "warning":
        return "secondary";
      case "inactive":
        return "outline";
      default:
        return "default";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Scenario Configuration</h2>
          <p className="text-muted-foreground">
            Configure and manage analysis scenarios for campaign performance measurement
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Custom Scenario
        </Button>
      </div>

      <div className="grid gap-6">
        {scenarioCategories.map((category, categoryIndex) => (
          <Card key={categoryIndex}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Settings className="h-4 w-4" />
                  Configure
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {category.scenarios.map((scenario, scenarioIndex) => (
                  <div
                    key={scenarioIndex}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {getStatusIcon(scenario.status)}
                      <div>
                        <h4 className="font-medium text-foreground">{scenario.name}</h4>
                        <p className="text-sm text-muted-foreground">{scenario.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant={getStatusVariant(scenario.status)}
                        className="font-mono text-xs"
                      >
                        {scenario.count}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};