import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Minus, Download, Filter } from "lucide-react";

export const DetailedAnalysis = () => {
  const controlVsTestData = [
    {
      metric: "Average Order Value",
      control: "$234.50",
      test: "$289.30", 
      lift: "+23.4%",
      significance: "99.2%",
      trend: "up"
    },
    {
      metric: "Purchase Frequency",
      control: "2.1/month",
      test: "2.8/month",
      lift: "+33.3%", 
      significance: "98.7%",
      trend: "up"
    },
    {
      metric: "Customer Acquisition",
      control: "145 new",
      test: "203 new",
      lift: "+40.0%",
      significance: "97.3%", 
      trend: "up"
    },
    {
      metric: "Retention Rate",
      control: "78.2%",
      test: "82.1%",
      lift: "+5.0%",
      significance: "89.4%",
      trend: "up"
    },
    {
      metric: "Time to Purchase",
      control: "4.2 days",
      test: "3.1 days", 
      lift: "-26.2%",
      significance: "94.8%",
      trend: "down"
    }
  ];

  const timeDecayAnalysis = [
    {
      period: "Campaign Week 1",
      engagement: "28.3%",
      conversion: "4.2%", 
      revenue: "$45,230",
      status: "spike"
    },
    {
      period: "Campaign Week 2", 
      engagement: "31.7%",
      conversion: "5.1%",
      revenue: "$67,450",
      status: "growth"
    },
    {
      period: "Campaign Week 3",
      engagement: "29.1%", 
      conversion: "4.8%",
      revenue: "$61,890",
      status: "sustained"
    },
    {
      period: "Post-Campaign Week 1",
      engagement: "18.2%",
      conversion: "3.9%", 
      revenue: "$52,100",
      status: "decline"
    },
    {
      period: "Post-Campaign Week 2",
      engagement: "15.7%",
      conversion: "3.2%",
      revenue: "$48,340", 
      status: "sustained"
    },
    {
      period: "Post-Campaign Week 3",
      engagement: "16.1%",
      conversion: "3.4%",
      revenue: "$49,780",
      status: "recovery"
    }
  ];

  const outletPerformance = [
    {
      outlet: "Metro Store #1247",
      segment: "Urban High-Volume",
      scenario: "Upsell + Cross-sell", 
      baseline: "$12,450",
      campaign: "$18,670",
      lift: "+50.0%",
      trend: "up"
    },
    {
      outlet: "Rural Market #589", 
      segment: "Rural Low-Volume",
      scenario: "New Activation",
      baseline: "$0",
      campaign: "$2,340",
      lift: "New",
      trend: "up"
    },
    {
      outlet: "Suburban Plaza #923",
      segment: "Suburban Medium-Volume", 
      scenario: "Reactivation",
      baseline: "$3,200",
      campaign: "$5,890",
      lift: "+84.1%",
      trend: "up"
    },
    {
      outlet: "City Center #445",
      segment: "Urban Premium",
      scenario: "Cross-sell",
      baseline: "$8,900", 
      campaign: "$11,230",
      lift: "+26.2%",
      trend: "up"
    },
    {
      outlet: "Mall Kiosk #156",
      segment: "Urban Low-Volume",
      scenario: "Drop-off",
      baseline: "$4,560",
      campaign: "$2,890", 
      lift: "-36.6%",
      trend: "down"
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-analytics-success" />;
      case "down": 
        return <TrendingDown className="h-4 w-4 text-analytics-danger" />;
      default:
        return <Minus className="h-4 w-4 text-analytics-neutral" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      spike: { variant: "secondary" as const, text: "Spike" },
      growth: { variant: "default" as const, text: "Growth" },
      sustained: { variant: "outline" as const, text: "Sustained" },
      decline: { variant: "destructive" as const, text: "Decline" },
      recovery: { variant: "default" as const, text: "Recovery" }
    };
    
    const config = variants[status as keyof typeof variants] || variants.sustained;
    return <Badge variant={config.variant}>{config.text}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Detailed Analysis</h2>
          <p className="text-muted-foreground">
            In-depth performance analysis across control groups, time periods, and individual outlets
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="control" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="control">Control vs Test</TabsTrigger>
          <TabsTrigger value="timedecay">Time Decay</TabsTrigger>
          <TabsTrigger value="outlets">Outlet Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="control" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Control Group vs Test Group Analysis</CardTitle>
              <CardDescription>
                Statistical comparison between campaign audience and control group
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Metric</TableHead>
                    <TableHead>Control Group</TableHead>
                    <TableHead>Test Group</TableHead>
                    <TableHead>Lift</TableHead>
                    <TableHead>Significance</TableHead>
                    <TableHead>Trend</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {controlVsTestData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.metric}</TableCell>
                      <TableCell>{row.control}</TableCell>
                      <TableCell>{row.test}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={row.trend === "up" ? "default" : row.trend === "down" ? "secondary" : "outline"}
                          className="font-mono"
                        >
                          {row.lift}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className={`font-medium ${
                          parseFloat(row.significance) > 95 ? "text-analytics-success" : "text-analytics-warning"
                        }`}>
                          {row.significance}
                        </span>
                      </TableCell>
                      <TableCell>
                        {getTrendIcon(row.trend)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timedecay" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Time-Decay Response Analysis</CardTitle>
              <CardDescription>
                Track how campaign effects evolve during and after the campaign period
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time Period</TableHead>
                    <TableHead>Engagement Rate</TableHead>
                    <TableHead>Conversion Rate</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Effect Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {timeDecayAnalysis.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.period}</TableCell>
                      <TableCell>{row.engagement}</TableCell>
                      <TableCell>{row.conversion}</TableCell>
                      <TableCell className="font-mono">{row.revenue}</TableCell>
                      <TableCell>
                        {getStatusBadge(row.status)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Immediate Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-analytics-info">68%</div>
                <p className="text-xs text-muted-foreground mt-1">
                  of outlets showed immediate response during campaign weeks
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Sustained Effect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-analytics-success">34%</div>
                <p className="text-xs text-muted-foreground mt-1">
                  maintained elevated performance 3+ weeks post-campaign
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Delayed Response</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-analytics-warning">18%</div>
                <p className="text-xs text-muted-foreground mt-1">
                  showed delayed impact appearing 2-4 weeks after campaign
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="outlets" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Individual Outlet Performance</CardTitle>
              <CardDescription>
                Detailed breakdown of how specific outlets responded to the campaign
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Outlet</TableHead>
                    <TableHead>Segment</TableHead>
                    <TableHead>Scenario</TableHead>
                    <TableHead>Baseline</TableHead>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead>Trend</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {outletPerformance.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.outlet}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {row.segment}
                        </Badge>
                      </TableCell>
                      <TableCell>{row.scenario}</TableCell>
                      <TableCell className="font-mono">{row.baseline}</TableCell>
                      <TableCell className="font-mono">{row.campaign}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={row.trend === "up" ? "default" : "destructive"}
                          className="font-mono"
                        >
                          {row.lift}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {getTrendIcon(row.trend)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};