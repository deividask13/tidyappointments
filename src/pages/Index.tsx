import { Calendar } from "@/components/Calendar/Calendar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { UpcomingAppointments } from "@/components/Appointment/UpcomingAppointments";
import { AppointmentStats } from "@/components/Appointment/AppointmentStats";
import Map from "@/components/Map/Map";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 p-2 sm:p-4 md:p-6 overflow-hidden w-full md:ml-0">
          <div className="h-full max-w-7xl mx-auto pt-16 md:pt-0">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,300px] gap-4">
              <div className="space-y-6">
                <div className="w-full">
                  <Calendar />
                </div>
                <div className="w-full">
                  <Map />
                </div>
              </div>
              <div className="space-y-4">
                <UpcomingAppointments />
                <AppointmentStats />
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;