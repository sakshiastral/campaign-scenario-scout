import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatCard } from "@/components/ui/stat-card";
import { ScenarioConfig } from "./ScenarioConfig";
import { PerformanceCharts } from "./PerformanceCharts";
import { DetailedAnalysis } from "./DetailedAnalysis";
import { SegmentAnalysis } from "./SegmentAnalysis";

export const CampaignAnalyzer = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for demonstration
  const campaignStats = {
    totalReach: "125,432",
    engagementRate: "23.4%",
    conversionRate: "4.7%",
    revenueGenerated: "$1,247,850"
  };

  const performanceMetrics = [
    {
      title: "Campaign Reach",
      value: campaignStats.totalReach,
      description: "Total outlets/users exposed",
      variant: "info" as const,
      trend: { value: 15.2, isPositive: true }
    },
    {
      title: "Engagement Rate",
      value: campaignStats.engagementRate,
      description: "Reached & engaged vs total reach",
      variant: "success" as const,
      trend: { value: 8.3, isPositive: true }
    },
    {
      title: "Conversion Rate",
      value: campaignStats.conversionRate,
      description: "Sales conversion from engagement",
      variant: "warning" as const,
      trend: { value: -2.1, isPositive: false }
    },
    {
      title: "Revenue Generated",
      value: campaignStats.revenueGenerated,
      description: "Direct + indirect attribution",
      variant: "success" as const,
      trend: { value: 24.7, isPositive: true }
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Campaign Analytics Dashboard
          </h1>
          <p className="text-muted-foreground">
            Analyze campaign performance across participation, behavioral shifts, and segment responses
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {performanceMetrics.map((metric, index) => (
            <StatCard
              key={index}
              title={metric.title}
              value={metric.value}
              description={metric.description}
              variant={metric.variant}
              trend={metric.trend}
            />
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="segments">Segments</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Summary</CardTitle>
                  <CardDescription>
                    High-level performance indicators and key insights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">Campaign Period</span>
                      <span className="text-muted-foreground">Mar 1 - Mar 31, 2024</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">Target Audience</span>
                      <span className="text-muted-foreground">150,000 outlets</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">Campaign Type</span>
                      <span className="text-muted-foreground">Product Launch + Discount</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-analytics-success/10 rounded-lg border border-analytics-success/20">
                      <span className="font-medium text-analytics-success">Status</span>
                      <span className="text-analytics-success font-semibold">Completed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Insights</CardTitle>
                  <CardDescription>
                    Automated insights from campaign analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-analytics-success/10 rounded-lg border border-analytics-success/20">
                      <div className="w-2 h-2 bg-analytics-success rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium text-analytics-success">Strong Performance</p>
                        <p className="text-xs text-muted-foreground">Urban outlets showed 34% higher engagement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-analytics-warning/10 rounded-lg border border-analytics-warning/20">
                      <div className="w-2 h-2 bg-analytics-warning rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium text-analytics-warning">Opportunity</p>
                        <p className="text-xs text-muted-foreground">Rural segments had delayed but sustained response</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-analytics-info/10 rounded-lg border border-analytics-info/20">
                      <div className="w-2 h-2 bg-analytics-info rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium text-analytics-info">Cross-sell Success</p>
                        <p className="text-xs text-muted-foreground">18% of outlets purchased new product categories</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scenarios">
            <ScenarioConfig />
          </TabsContent>

          <TabsContent value="performance">
            <PerformanceCharts />
          </TabsContent>

          <TabsContent value="analysis">
            <DetailedAnalysis />
          </TabsContent>

          <TabsContent value="segments">
            <SegmentAnalysis />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};