import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts"

const bloodTypeData = [
  { type: "O+", available: 245, required: 280, color: "hsl(var(--primary))" },
  { type: "A+", available: 189, required: 200, color: "hsl(var(--accent))" },
  { type: "B+", available: 156, required: 150, color: "hsl(var(--success))" },
  { type: "AB+", available: 98, required: 120, color: "hsl(var(--warning))" },
  { type: "O-", available: 67, required: 90, color: "hsl(var(--destructive))" },
  { type: "A-", available: 123, required: 110, color: "hsl(var(--secondary))" },
  { type: "B-", available: 89, required: 95, color: "hsl(var(--muted-foreground))" },
  { type: "AB-", available: 34, required: 45, color: "hsl(var(--accent)/0.7)" },
]

export function BloodInventoryChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Blood Inventory Status</CardTitle>
        <CardDescription>Current availability vs required levels by blood type</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bloodTypeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="type" 
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                axisLine={{ stroke: "hsl(var(--border))" }}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                axisLine={{ stroke: "hsl(var(--border))" }}
              />
              <Bar dataKey="available" radius={[4, 4, 0, 0]}>
                {bloodTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          {bloodTypeData.map((item) => (
            <div key={item.type} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-muted-foreground">
                {item.type}: {item.available}/{item.required}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}