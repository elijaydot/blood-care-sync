import { DashboardLayout } from "@/components/DashboardLayout"
import { StatsCard } from "@/components/dashboard/StatsCard"
import { QuickActions } from "@/components/dashboard/QuickActions"
import { BloodInventoryChart } from "@/components/dashboard/BloodInventoryChart"
import { RecentActivity } from "@/components/dashboard/RecentActivity"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  DropletIcon, 
  Calendar, 
  Heart, 
  Users, 
  Clock,
  AlertTriangle,
  CheckCircle,
  TrendingUp
} from "lucide-react"

export default function Dashboard() {
  // Sample data - in real app this would come from API
  const stats = [
    {
      title: "Blood Units Available",
      value: "1,247",
      change: { value: "+12% from last month", trend: "up" as const },
      icon: DropletIcon,
      variant: "primary" as const
    },
    {
      title: "Pending Appointments",
      value: "24",
      change: { value: "Next appointment in 2 hours", trend: "neutral" as const },
      icon: Calendar,
      variant: "default" as const
    },
    {
      title: "Urgent Requests",
      value: "7",
      change: { value: "-3 from yesterday", trend: "down" as const },
      icon: AlertTriangle,
      variant: "warning" as const
    },
    {
      title: "Fulfilled Today",
      value: "18",
      change: { value: "+6 from yesterday", trend: "up" as const },
      icon: CheckCircle,
      variant: "success" as const
    }
  ]

  const recentAppointments = [
    { id: 1, donor: "John Smith", time: "09:30 AM", type: "O+", status: "confirmed" },
    { id: 2, donor: "Sarah Johnson", time: "10:15 AM", type: "A-", status: "confirmed" },
    { id: 3, donor: "Mike Chen", time: "11:00 AM", type: "B+", status: "pending" },
    { id: 4, donor: "Emma Davis", time: "02:30 PM", type: "AB-", status: "confirmed" },
  ]

  const urgentRequests = [
    { id: 1, hospital: "Emergency Ward", bloodType: "O-", units: 4, priority: "urgent" },
    { id: 2, hospital: "Pediatric ICU", bloodType: "A+", units: 2, priority: "high" },
    { id: 3, hospital: "Surgery Dept", bloodType: "B-", units: 6, priority: "medium" },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent": return "destructive"
      case "high": return "secondary" 
      case "medium": return "outline"
      default: return "default"
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Dr. Wilson</h1>
          <p className="text-muted-foreground">Here's what's happening at your hospital today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <QuickActions />
          </div>

          {/* Recent Appointments */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Today's Appointments</CardTitle>
                  <CardDescription>Upcoming donor appointments</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentAppointments.map((appointment) => (
                    <div 
                      key={appointment.id} 
                      className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div>
                          <p className="font-medium">{appointment.donor}</p>
                          <p className="text-sm text-muted-foreground">{appointment.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="blood-type-indicator">
                          {appointment.type}
                        </Badge>
                        <Badge 
                          variant={appointment.status === "confirmed" ? "default" : "secondary"}
                        >
                          {appointment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Blood Inventory Chart and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BloodInventoryChart />
          <RecentActivity />
        </div>

        {/* Urgent Requests */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg flex items-center">
                <Heart className="w-5 h-5 mr-2 text-destructive" />
                Urgent Blood Requests
              </CardTitle>
              <CardDescription>Critical requests requiring immediate attention</CardDescription>
            </div>
            <Button variant="destructive" size="sm">
              View All Requests
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {urgentRequests.map((request) => (
                <div 
                  key={request.id} 
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:shadow-medium transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant={getPriorityColor(request.priority)}>
                        {request.priority}
                      </Badge>
                    </div>
                    <div>
                      <p className="font-medium">{request.hospital}</p>
                      <p className="text-sm text-muted-foreground">
                        Requesting {request.units} units of {request.bloodType}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="blood-type-indicator font-mono">
                      {request.bloodType}
                    </Badge>
                    <Button size="sm" variant="outline">
                      Fulfill
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}