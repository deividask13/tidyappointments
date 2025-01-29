import { Calendar } from "@/components/Calendar/Calendar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 p-2 sm:p-4 md:p-6 overflow-hidden w-full md:ml-0">
          <div className="h-full max-w-7xl mx-auto pt-14 md:pt-0">
            <Calendar />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;