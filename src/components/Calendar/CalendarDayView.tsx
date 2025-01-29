import { format } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AppointmentForm } from "../Appointment/AppointmentForm";

interface CalendarDayViewProps {
  currentDate: Date;
}

export const CalendarDayView = ({ currentDate }: CalendarDayViewProps) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="min-h-full">
      <div className="grid grid-cols-1 gap-px bg-gray-200">
        {hours.map((hour) => (
          <div
            key={hour}
            className="bg-white p-2 sm:p-4 min-h-[80px] relative group hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm text-gray-500">
              {format(new Date().setHours(hour), "h:mm a")}
            </span>
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
                <AppointmentForm selectedDate={currentDate} />
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
};