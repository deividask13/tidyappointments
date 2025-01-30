import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, Clock } from "lucide-react";
import { format } from "date-fns";

// Mock data - replace with real data when backend is integrated
const upcomingAppointments = [
  {
    id: 1,
    title: "Doctor Appointment",
    date: new Date(2024, 3, 25, 14, 30),
  },
  {
    id: 2,
    title: "Dental Checkup",
    date: new Date(2024, 3, 27, 10, 0),
  },
  {
    id: 3,
    title: "Eye Examination",
    date: new Date(2024, 3, 29, 15, 45),
  },
];

export const UpcomingAppointments = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
        <CalendarCheck className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center space-x-4 rounded-md border p-3"
            >
              <Clock className="h-4 w-4 text-muted-foreground" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">{appointment.title}</p>
                <p className="text-xs text-muted-foreground">
                  {format(appointment.date, "PPp")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};