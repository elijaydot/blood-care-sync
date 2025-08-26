import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Calendar, UserPlus, AlertTriangle } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: "New Appointment",
      description: "Schedule donor appointment",
      icon: Calendar,
      variant: "primary" as const,
      onClick: () => console.log("New appointment")
    },
    {
      title: "Add Blood Unit", 
      description: "Register new blood donation",
      icon: Plus,
      variant: "success" as const,
      onClick: () => console.log("Add blood unit")
    },
    {
      title: "Register Donor",
      description: "Add new donor profile", 
      icon: UserPlus,
      variant: "secondary" as const,
      onClick: () => console.log("Register donor")
    },
    {
      title: "Urgent Request",
      description: "Handle critical blood need",
      icon: AlertTriangle,
      variant: "destructive" as const,
      onClick: () => console.log("Urgent request")
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {actions.map((action) => (
            <Button
              key={action.title}
              variant={action.variant}
              className="h-auto p-4 flex flex-col items-start space-y-1 transition-base hover:scale-105"
              onClick={action.onClick}
            >
              <div className="flex items-center space-x-2 w-full">
                <action.icon className="w-4 h-4" />
                <span className="font-medium">{action.title}</span>
              </div>
              <span className="text-xs opacity-80 text-left">
                {action.description}
              </span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}