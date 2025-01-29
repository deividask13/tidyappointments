import React from 'react';
import { format, addDays, startOfWeek } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
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
    <div className="overflow-x-auto">
      <div className="grid grid-cols-8 gap-px bg-gray-200 min-w-[800px]">
        <div className="bg-white p-1 md:p-2 text-center font-medium text-gray-500 text-xs md:text-sm">
          Time
        </div>
        {days.map((day) => (
          <div key={day.toISOString()} className="bg-white p-1 md:p-2 text-center font-medium text-xs md:text-sm">
            <span className="hidden sm:block">{format(day, "EEE d")}</span>
            <span className="sm:hidden">{format(day, "E")}</span>
          </div>
        ))}
        
        {hours.map((hour) => (
          <React.Fragment key={`time-${hour}`}>
            <div className="bg-white p-1 md:p-2 text-xs md:text-sm text-gray-500">
              {format(new Date().setHours(hour), "h:mm a")}
            </div>
            {days.map((day) => (
              <div
                key={`${day.toISOString()}-${hour}`}
                className="bg-white p-1 md:p-2 min-h-[50px] md:min-h-[60px] relative group hover:bg-gray-50 transition-colors"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-1 right-1 md:top-2 md:right-2 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 md:h-8 md:w-8"
                    >
                      <Plus className="h-3 w-3 md:h-4 md:w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
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