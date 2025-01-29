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
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-2">
        <Button variant="outline" onClick={onToday}>
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
        <h2 className="text-xl font-semibold">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
      </div>
      <div className="flex items-center gap-2">
        <Button 
          variant={view === "month" ? "default" : "outline"}
          onClick={() => onViewChange("month")}
        >
          Month
        </Button>
        <Button 
          variant={view === "week" ? "default" : "outline"}
          onClick={() => onViewChange("week")}
        >
          Week
        </Button>
        <Button 
          variant={view === "day" ? "default" : "outline"}
          onClick={() => onViewChange("day")}
        >
          Day
        </Button>
      </div>
    </div>
  );
};