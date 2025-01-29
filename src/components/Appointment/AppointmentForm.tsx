import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface AppointmentFormProps {
  selectedDate: Date | null;
}

export const AppointmentForm = ({ selectedDate }: AppointmentFormProps) => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("12:00");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the appointment
    toast({
      title: "Appointment created",
      description: "Your appointment has been successfully created.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter appointment title"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          type="date"
          value={selectedDate?.toISOString().split('T')[0]}
          disabled
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="time">Time</Label>
        <Input
          id="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter appointment details"
        />
      </div>
      
      <Button type="submit" className="w-full">
        Create Appointment
      </Button>
    </form>
  );
};