import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  DropletIcon, 
  Calendar, 
  UserPlus, 
  CheckCircle,
  Clock,
  AlertTriangle
} from "lucide-react"

const activities = [
  {
    id: 1,
    type: "donation",
    message: "New blood donation completed",
    donor: "John Smith",
    bloodType: "O+",
    units: 2,
    timestamp: "5 minutes ago",
    icon: DropletIcon,
    color: "text-primary"
  },
  {
    id: 2,
    type: "appointment",
    message: "Appointment confirmed",
    donor: "Sarah Johnson", 
    bloodType: "A-",
    timestamp: "12 minutes ago",
    icon: Calendar,
    color: "text-accent"
  },
  {
    id: 3,
    type: "request_fulfilled",
    message: "Urgent request fulfilled",
    donor: "Emergency Ward",
    bloodType: "AB-",
    units: 3,
    timestamp: "25 minutes ago", 
    icon: CheckCircle,
    color: "text-success"
  },
  {
    id: 4,
    type: "new_donor",
    message: "New donor registered",
    donor: "Mike Chen",
    bloodType: "B+",
    timestamp: "1 hour ago",
    icon: UserPlus,
    color: "text-secondary"
  },
  {
    id: 5,
    type: "urgent_request",
    message: "New urgent request received",
    donor: "Surgical ICU",
    bloodType: "O-",
    units: 6,
    timestamp: "2 hours ago",
    icon: AlertTriangle,
    color: "text-destructive"
  }
]

export function RecentActivity() {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Activity</CardTitle>
        <CardDescription>Latest updates from your blood bank</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className={`mt-0.5 ${activity.color}`}>
                <activity.icon className="w-4 h-4" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.message}
                </p>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <span>{activity.donor}</span>
                  <span>•</span>
                  <Badge variant="outline" className="text-xs">
                    {activity.bloodType}
                  </Badge>
                  {activity.units && (
                    <>
                      <span>•</span>
                      <span>{activity.units} units</span>
                    </>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
              <Avatar className="w-8 h-8">
                <AvatarFallback className="text-xs bg-muted">
                  {getInitials(activity.donor)}
                </AvatarFallback>
              </Avatar>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}