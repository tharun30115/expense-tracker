import { CalendarDaysIcon, HomeIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.png";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Overview",
      icon: HomeIcon,
      active: true,
    },
    {
      name: "Schedule",
      icon: CalendarDaysIcon,
      active: false,
    },
    {
      name: "Legal",
      icon: DocumentTextIcon,
      active: false,
    },
    {
      name: "Insights",
      icon: ChartBarIcon,
      active: false,
    },
    {
      name: "Inbox",
      icon: EnvelopeIcon,
    },
  ];
  return (
    <div className="fixed left-0 top-0 xl:w-[250px] w-[80px] h-full flex flex-col gap-3 py-10 px-5 items-center justify-start xl:bg-transparent bg-background">
      <div className="w-full flex flex-col items-start justify-center gap-1">
        <img src={logo} alt="logo" className="xl:w-[45%] w-[100%]" />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-5 mt-3">
        {menuItems.map((item) => (
          <div className="w-full flex items-center justify-start gap-3 rounded-lg hover:bg-sidebar-hover px-2 py-3 cursor-pointer">
            <item.icon
              className={`w-6 h-6 ${item.active ? "text-sidebar-active" : "text-primary"}`}
            />
            <h1
              className={`text-lg font-medium xl:block hidden ${
                item.active ? "text-sidebar-active" : "text-primary"
              }`}>
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
