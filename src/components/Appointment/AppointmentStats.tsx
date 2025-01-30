import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartPie } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

// Mock data - replace with real data when backend is integrated
const data = [
  { name: "Medical", value: 8 },
  { name: "Dental", value: 4 },
  { name: "Eye Care", value: 3 },
];

const COLORS = ["#8B5CF6", "#06B6D4", "#10B981"];

export const AppointmentStats = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Appointment Summary</CardTitle>
        <ChartPie className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-4">{total} Total Appointments</div>
        <div className="h-[240px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]}
                    className="stroke-background hover:opacity-80 transition-opacity"
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  background: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem',
                  padding: '0.5rem'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {data.map((item, index) => (
            <div key={item.name} className="text-center">
              <div className="flex items-center justify-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              <p className="text-2xl font-bold mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};