import { Calendar } from "@/components/Calendar/Calendar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <Calendar />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;