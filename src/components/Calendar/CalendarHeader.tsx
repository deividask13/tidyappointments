import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevious: () => void;
  onNext: () => void;
  onToday: () => void;
  view: "month" | "week" | "day";
  onViewChange: (view: "month" | "week" | "day") => void;
}

export const CalendarHeader = ({
  currentDate,
  onPrevious,
  onNext,
  onToday,
  view,
  onViewChange,
}: CalendarHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4 border-b gap-2">
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <Button variant="outline" onClick={onToday} size="sm" className="whitespace-nowrap">
          Today
        </Button>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={onPrevious}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <h2 className="text-lg sm:text-xl font-semibold whitespace-nowrap">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end">
        <Button 
          size="sm"
          variant={view === "month" ? "default" : "outline"}
          onClick={() => onViewChange("month")}
        >
          Month
        </Button>
        <Button 
          size="sm"
          variant={view === "week" ? "default" : "outline"}
          onClick={() => onViewChange("week")}
        >
          Week
        </Button>
        <Button 
          size="sm"
          variant={view === "day" ? "default" : "outline"}
          onClick={() => onViewChange("day")}
        >
          Day
        </Button>
      </div>
    </div>
  );
};