import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";

export const PerformanceCharts = () => {
  // Mock data for charts
  const timeSeriesData = [
    { date: "Week 1", engagement: 12, conversion: 2.1, revenue: 45000, control: 8 },
    { date: "Week 2", engagement: 18, conversion: 3.2, revenue: 67000, control: 9 },
    { date: "Week 3", engagement: 28, conversion: 4.7, revenue: 89000, control: 10 },
    { date: "Week 4", engagement: 23, conversion: 4.1, revenue: 78000, control: 11 },
    { date: "Week 5", engagement: 19, conversion: 3.8, revenue: 72000, control: 9 },
  ];

  const behaviorChangeData = [
    { scenario: "New Activation", count: 3247, percentage: 18.2, color: "#3b82f6" },
    { scenario: "Reactivation", count: 1892, percentage: 10.6, color: "#10b981" },
    { scenario: "Upsell", count: 8934, percentage: 50.1, color: "#f59e0b" },
    { scenario: "Cross-sell", count: 5123, percentage: 28.7, color: "#8b5cf6" },
    { scenario: "No Change", count: 67234, percentage: 75.3, color: "#6b7280" },
    { scenario: "Drop-off", count: 2156, percentage: 12.1, color: "#ef4444" },
  ];

  const exposureData = [
    { name: "Reached & Engaged", value: 29342, color: "#10b981" },
    { name: "Reached & Not Engaged", value: 96090, color: "#f59e0b" },
    { name: "Not Reached (Control)", value: 24568, color: "#6b7280" },
  ];

  const redemptionData = [
    { scenario: "Redeemed & Increased", value: 7456, baseline: 4200 },
    { scenario: "Redeemed Only", value: 12234, baseline: 12000 },
    { scenario: "No Redeem + Increased", value: 15678, baseline: 8900 },
    { scenario: "No Redeem + No Change", value: 89432, baseline: 88500 },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#6b7280"];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Performance Analytics</h2>
        <p className="text-muted-foreground">
          Visual analysis of campaign performance across different scenarios and time periods
        </p>
      </div>

      <Tabs defaultValue="timeline" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="timeline">Timeline Analysis</TabsTrigger>
          <TabsTrigger value="behavior">Behavior Changes</TabsTrigger>
          <TabsTrigger value="exposure">Exposure Breakdown</TabsTrigger>
          <TabsTrigger value="redemption">Redemption Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Performance Over Time</CardTitle>
                <CardDescription>
                  Track engagement, conversion, and revenue trends vs control group
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={timeSeriesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="engagement" 
                      stroke="hsl(var(--chart-1))" 
                      strokeWidth={3}
                      name="Engagement Rate (%)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="conversion" 
                      stroke="hsl(var(--chart-2))" 
                      strokeWidth={3}
                      name="Conversion Rate (%)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="control" 
                      stroke="hsl(var(--chart-6))" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Control Group (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Impact Analysis</CardTitle>
                <CardDescription>
                  Weekly revenue attribution from campaign activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={timeSeriesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                      formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="hsl(var(--chart-2))" 
                      fill="hsl(var(--chart-2) / 0.2)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="behavior" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Behavioral Change Distribution</CardTitle>
              <CardDescription>
                Breakdown of how outlet behaviors changed during the campaign
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={behaviorChangeData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                  <YAxis dataKey="scenario" type="category" stroke="hsl(var(--muted-foreground))" width={120} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                    formatter={(value, name) => [
                      name === "count" ? value.toLocaleString() : `${value}%`,
                      name === "count" ? "Outlets" : "Percentage"
                    ]}
                  />
                  <Bar dataKey="count" fill="hsl(var(--chart-1))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exposure" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Exposure Distribution</CardTitle>
                <CardDescription>
                  How the target audience was reached and engaged
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={exposureData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {exposureData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                      formatter={(value) => [value.toLocaleString(), "Outlets"]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engagement Metrics</CardTitle>
                <CardDescription>
                  Detailed breakdown of engagement types
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {exposureData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{item.value.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">
                          {((item.value / exposureData.reduce((sum, d) => sum + d.value, 0)) * 100).toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="redemption" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Redemption vs Sales Impact</CardTitle>
              <CardDescription>
                Compare redemption behavior against actual sales changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={redemptionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="scenario" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                    formatter={(value) => [value.toLocaleString(), "Outlets"]}
                  />
                  <Legend />
                  <Bar dataKey="value" fill="hsl(var(--chart-1))" name="Campaign Period" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="baseline" fill="hsl(var(--chart-6))" name="Baseline" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};