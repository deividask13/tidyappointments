import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
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
    <div className="grid grid-cols-7 gap-px bg-gray-200 w-full overflow-x-auto">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <div key={day} className="bg-white p-1 md:p-2 text-center text-xs md:text-sm font-medium text-gray-500">
          <span className="hidden sm:inline">{day}</span>
          <span className="sm:hidden">{day.charAt(0)}</span>
        </div>
      ))}
      
      {emptyDays.map((_, index) => (
        <div key={`empty-${index}`} className="bg-white p-1 md:p-2" />
      ))}
      
      {days.map((day) => (
        <div
          key={day}
          className="bg-white p-1 md:p-2 min-h-[60px] md:min-h-[100px] relative group hover:bg-gray-50 transition-colors"
        >
          <span className="text-xs md:text-sm">{day}</span>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1 right-1 md:top-2 md:right-2 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 md:h-8 md:w-8"
                onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
              >
                <Plus className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Appointment</DialogTitle>
                <DialogDescription>Create a new appointment for your calendar.</DialogDescription>
              </DialogHeader>
              <AppointmentForm selectedDate={selectedDate} />
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
};