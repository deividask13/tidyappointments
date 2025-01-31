import { Menu, Calendar, Plus, Settings, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Calendar",
    icon: Calendar,
    url: "#",
  },
  {
    title: "New Appointment",
    icon: Plus,
    url: "#",
  },
  {
    title: "Settings",
    icon: Settings,
    url: "#",
  },
  {
    title: "Profile",
    icon: User,
    url: "#",
  },
];

export function AppSidebar() {
  return (
    <>
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <SidebarTrigger className="bg-white shadow-lg rounded-full p-2.5 hover:bg-gray-50 border border-gray-100">
          <Menu className="h-5 w-5 text-gray-700" />
        </SidebarTrigger>
      </div>
      <Sidebar>
        <SidebarContent className="bg-white shadow-xl border-r border-gray-100">
          <SidebarGroup>
            <SidebarGroupLabel className="text-gray-700 font-semibold px-4">Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a 
                        href={item.url} 
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        <item.icon className="h-5 w-5 text-gray-600" />
                        <span className="text-gray-700 font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
}