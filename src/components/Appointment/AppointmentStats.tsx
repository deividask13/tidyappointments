import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, ChartPie } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

// Mock data - replace with real data when backend is integrated
const data = [
  { name: "Medical", value: 8 },
  { name: "Dental", value: 4 },
  { name: "Eye Care", value: 3 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export const AppointmentStats = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Appointment Summary</CardTitle>
        <ChartPie className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-2">{total} Total</div>
        <div className="h-[200px]">
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
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};