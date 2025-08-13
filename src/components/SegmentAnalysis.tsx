import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { MapPin, Users, ShoppingCart, Star, TrendingUp, Target } from "lucide-react";

export const SegmentAnalysis = () => {
  const segmentPerformance = [
    {
      segment: "Urban High-Volume",
      outlets: 2840,
      engagement: 89.2,
      conversion: 12.4,
      avgOrderValue: 342.50,
      lift: "+34.2%",
      status: "excellent",
      icon: MapPin
    },
    {
      segment: "Suburban Medium-Volume", 
      outlets: 4120,
      engagement: 76.8,
      conversion: 8.9,
      avgOrderValue: 278.30,
      lift: "+22.1%", 
      status: "good",
      icon: Users
    },
    {
      segment: "Rural Low-Volume",
      outlets: 1890,
      engagement: 45.3,
      conversion: 5.2,
      avgOrderValue: 189.75,
      lift: "+18.7%",
      status: "moderate",
      icon: MapPin
    },
    {
      segment: "Loyalty Members",
      outlets: 3450,
      engagement: 91.7,
      conversion: 15.8,
      avgOrderValue: 425.60,
      lift: "+41.5%",
      status: "excellent", 
      icon: Star
    },
    {
      segment: "New Customers",
      outlets: 2240,
      engagement: 34.6,
      conversion: 3.1,
      avgOrderValue: 156.80,
      lift: "+8.9%",
      status: "poor",
      icon: Users
    },
    {
      segment: "Heavy Buyers",
      outlets: 1560,
      engagement: 88.4,
      conversion: 18.2,
      avgOrderValue: 687.90,
      lift: "+28.3%",
      status: "excellent",
      icon: ShoppingCart
    }
  ];

  const timeBasedSegments = [
    { segment: "Immediate Responders", percentage: 34.2, outlets: 4235, timeframe: "0-2 days" },
    { segment: "Quick Adopters", percentage: 28.7, outlets: 3560, timeframe: "3-7 days" },
    { segment: "Gradual Adopters", percentage: 22.1, outlets: 2741, timeframe: "1-2 weeks" },
    { segment: "Delayed Responders", percentage: 15.0, outlets: 1862, timeframe: "3+ weeks" }
  ];

  const productCategoryPerformance = [
    { category: "Premium Products", baseline: 12000, campaign: 18400, lift: 53.3 },
    { category: "Core Products", baseline: 45000, campaign: 56200, lift: 24.9 },
    { category: "Seasonal Items", baseline: 8500, campaign: 15800, lift: 85.9 },
    { category: "Accessories", baseline: 6700, campaign: 9200, lift: 37.3 },
    { category: "Bulk Orders", baseline: 23000, campaign: 28500, lift: 23.9 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "analytics-success";
      case "good": return "analytics-info";
      case "moderate": return "analytics-warning";
      case "poor": return "analytics-danger";
      default: return "analytics-neutral";
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "excellent": return "default";
      case "good": return "secondary";
      case "moderate": return "outline";
      case "poor": return "destructive";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Segment Analysis</h2>
          <p className="text-muted-foreground">
            Campaign performance broken down by outlet segments, customer types, and product categories
          </p>
        </div>
        <Button className="gap-2">
          <Target className="h-4 w-4" />
          Create Custom Segment
        </Button>
      </div>

      <Tabs defaultValue="segments" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="segments">Outlet Segments</TabsTrigger>
          <TabsTrigger value="timing">Response Timing</TabsTrigger>
          <TabsTrigger value="products">Product Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="segments" className="space-y-6">
          <div className="grid gap-6">
            {segmentPerformance.map((segment, index) => {
              const IconComponent = segment.icon;
              return (
                <Card key={index} className="hover:shadow-card transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-${getStatusColor(segment.status)}/10`}>
                          <IconComponent className={`h-5 w-5 text-${getStatusColor(segment.status)}`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{segment.segment}</CardTitle>
                          <CardDescription>{segment.outlets.toLocaleString()} outlets</CardDescription>
                        </div>
                      </div>
                      <Badge variant={getStatusVariant(segment.status)} className="gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {segment.lift}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Engagement Rate</span>
                          <span className="font-medium">{segment.engagement}%</span>
                        </div>
                        <Progress value={segment.engagement} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Conversion Rate</span>
                          <span className="font-medium">{segment.conversion}%</span>
                        </div>
                        <Progress value={segment.conversion * 5} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Avg Order Value</span>
                          <span className="font-medium font-mono">${segment.avgOrderValue}</span>
                        </div>
                        <div className={`text-xs text-${getStatusColor(segment.status)} font-medium`}>
                          {segment.status.charAt(0).toUpperCase() + segment.status.slice(1)} Performance
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="timing" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Response Time Distribution</CardTitle>
                <CardDescription>
                  How quickly different segments responded to the campaign
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timeBasedSegments.map((segment, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">{segment.segment}</span>
                          <span className="text-sm text-muted-foreground ml-2">({segment.timeframe})</span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">{segment.percentage}%</div>
                          <div className="text-xs text-muted-foreground">{segment.outlets.toLocaleString()} outlets</div>
                        </div>
                      </div>
                      <Progress value={segment.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Insights</CardTitle>
                <CardDescription>
                  Key findings from timing analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-analytics-success/10 rounded-lg border border-analytics-success/20">
                    <h4 className="font-medium text-analytics-success mb-2">Fast Response</h4>
                    <p className="text-sm text-muted-foreground">
                      62.9% of outlets responded within the first week, indicating strong initial campaign impact
                    </p>
                  </div>
                  <div className="p-4 bg-analytics-info/10 rounded-lg border border-analytics-info/20">
                    <h4 className="font-medium text-analytics-info mb-2">Sustained Interest</h4>
                    <p className="text-sm text-muted-foreground">
                      15% showed delayed response after 3+ weeks, suggesting word-of-mouth effects
                    </p>
                  </div>
                  <div className="p-4 bg-analytics-warning/10 rounded-lg border border-analytics-warning/20">
                    <h4 className="font-medium text-analytics-warning mb-2">Optimization Opportunity</h4>
                    <p className="text-sm text-muted-foreground">
                      Rural segments had longer response times - consider extended campaign duration
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Category Performance</CardTitle>
              <CardDescription>
                Campaign impact across different product categories and cross-sell opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={productCategoryPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="category" 
                    stroke="hsl(var(--muted-foreground))"
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                    formatter={(value, name) => [
                      value.toLocaleString(), 
                      name === "baseline" ? "Baseline Sales" : "Campaign Sales"
                    ]}
                  />
                  <Bar dataKey="baseline" fill="hsl(var(--chart-6))" name="Baseline" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="campaign" fill="hsl(var(--chart-1))" name="Campaign" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productCategoryPerformance.map((category, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Baseline</span>
                      <span>Campaign</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>{category.baseline.toLocaleString()}</span>
                      <span>{category.campaign.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Badge 
                        variant={category.lift > 50 ? "default" : category.lift > 25 ? "secondary" : "outline"}
                        className="font-mono text-xs"
                      >
                        +{category.lift}%
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};