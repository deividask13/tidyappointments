import { format, addDays, startOfWeek } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AppointmentForm } from "../Appointment/AppointmentForm";

interface CalendarWeekViewProps {
  currentDate: Date;
}

export const CalendarWeekView = ({ currentDate }: CalendarWeekViewProps) => {
  const weekStart = startOfWeek(currentDate);
  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="min-h-full overflow-auto">
      <div className="grid grid-cols-8 gap-px bg-gray-200 min-w-[800px]">
        <div className="bg-white p-2 sm:p-4 text-center font-medium text-gray-500">
          Time
        </div>
        {days.map((day) => (
          <div key={day.toISOString()} className="bg-white p-2 sm:p-4 text-center font-medium">
            <span className="hidden sm:block">{format(day, "EEE d")}</span>
            <span className="sm:hidden">{format(day, "E")}</span>
          </div>
        ))}
        
        {hours.map((hour) => (
          <React.Fragment key={`time-${hour}`}>
            <div className="bg-white p-2 sm:p-4 text-sm text-gray-500">
              {format(new Date().setHours(hour), "h:mm a")}
            </div>
            {days.map((day) => (
              <div
                key={`${day.toISOString()}-${hour}`}
                className="bg-white p-2 sm:p-4 min-h-[60px] relative group hover:bg-gray-50 transition-colors"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Appointment</DialogTitle>
                      <DialogDescription>Create a new appointment for your calendar.</DialogDescription>
                    </DialogHeader>
                    <AppointmentForm selectedDate={day} />
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};