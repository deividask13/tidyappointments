import React from 'react';
import { format } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AppointmentForm } from "../Appointment/AppointmentForm";

interface CalendarDayViewProps {
  currentDate: Date;
}

export const CalendarDayView = ({ currentDate }: CalendarDayViewProps) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="min-h-full overflow-y-auto">
      <div className="grid grid-cols-1 gap-px bg-gray-200">
        {hours.map((hour) => (
          <div
            key={hour}
            className="bg-white p-2 md:p-4 min-h-[60px] md:min-h-[80px] relative group hover:bg-gray-50 transition-colors"
          >
            <span className="text-xs md:text-sm text-gray-500">
              {format(new Date().setHours(hour), "h:mm a")}
            </span>
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
                <AppointmentForm selectedDate={currentDate} />
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
};