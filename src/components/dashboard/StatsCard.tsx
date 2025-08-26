import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string | number
  change?: {
    value: string
    trend: "up" | "down" | "neutral"
  }
  icon: LucideIcon
  variant?: "default" | "primary" | "success" | "warning" | "destructive"
  className?: string
}

const variantClasses = {
  default: "border-border",
  primary: "border-primary/20 bg-primary-light/50",
  success: "border-success/20 bg-success-light/50", 
  warning: "border-warning/20 bg-warning-light/50",
  destructive: "border-destructive/20 bg-destructive/5"
}

const iconVariantClasses = {
  default: "text-muted-foreground",
  primary: "text-primary",
  success: "text-success",
  warning: "text-warning", 
  destructive: "text-destructive"
}

export function StatsCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  variant = "default",
  className 
}: StatsCardProps) {
  return (
    <Card className={cn(
      "transition-base hover:shadow-medium", 
      variantClasses[variant],
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={cn("h-4 w-4", iconVariantClasses[variant])} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {change && (
          <p className={cn(
            "text-xs mt-1",
            change.trend === "up" ? "text-success" : 
            change.trend === "down" ? "text-destructive" : 
            "text-muted-foreground"
          )}>
            {change.value}
          </p>
        )}
      </CardContent>
    </Card>
  )
}