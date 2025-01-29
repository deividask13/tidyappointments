import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AppointmentForm } from "../Appointment/AppointmentForm";

interface CalendarGridProps {
  currentDate: Date;
}

export const CalendarGrid = ({ currentDate }: CalendarGridProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    return { daysInMonth, startingDay };
  };

  const { daysInMonth, startingDay } = getDaysInMonth(currentDate);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: startingDay }, (_, i) => i);

  return (
    <div className="grid grid-cols-7 gap-px bg-gray-200 flex-1">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <div key={day} className="bg-white p-4 text-center text-sm font-medium text-gray-500">
          {day}
        </div>
      ))}
      
      {emptyDays.map((_, index) => (
        <div key={`empty-${index}`} className="bg-white p-4" />
      ))}
      
      {days.map((day) => (
        <div
          key={day}
          className="bg-white p-4 min-h-[100px] relative group"
        >
          <span className="text-sm">{day}</span>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Appointment</DialogTitle>
              </DialogHeader>
              <AppointmentForm selectedDate={selectedDate} />
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
};