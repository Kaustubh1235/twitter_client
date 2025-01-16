import React from "react";
import FeedCard from ".";
import {
  RiWomenLine,
  RiUserCommunityFill,
} from "react-icons/ri"; // Women icon, Community icon
import { PiHouseFill, PiRobotDuotone } from "react-icons/pi"; // House, AI icons
import { CiSearch } from "react-icons/ci"; // Search icon
import { MdNotifications } from "react-icons/md"; // Notifications icon
import { FaRegMessage } from "react-icons/fa6"; // Message icon
import { CgProfile } from "react-icons/cg"; // Profile icon
import { Inter, Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  { title: "Home", icon: <PiHouseFill /> },
  { title: "Explore", icon: <CiSearch /> },
  { title: "Notifications", icon: <MdNotifications /> },
  { title: "Messages", icon: <FaRegMessage /> },
  { title: "AI Assistant", icon: <PiRobotDuotone /> },
  { title: "Community", icon: <RiUserCommunityFill /> },
  { title: "Profile", icon: <CgProfile /> },
];

export default function Home() {
  return (
    <div
      className={`bg-background text-primary-dark ${quicksand.className} min-h-screen`}
    >
      <div className="grid grid-cols-12 md:px-8 px-4 gap-4 h-full">
        {/* Sidebar */}
        <div className="col-span-1 md:col-span-3 justify-start pt-4 px-2">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-3xl h-fit hover:bg-primary-dark rounded-full p-2 cursor-pointer transition-all text-primary mb-4">
              <RiWomenLine />
            </div>
            <ul className="space-y-4">
              {sidebarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col items-center md:flex-row md:gap-4 hover:bg-primary-light hover:text-background-dark rounded-full px-3 py-2 cursor-pointer transition-all"
                >
                  <span className="text-2xl md:text-3xl">{item.icon}</span>
                  <span className="hidden md:block">{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-all hidden md:block">
              Tweet
            </button>
          </div>
        </div>
        {/* Main Content */}
        <div className="col-span-11 md:col-span-6 border-r-[1px] border-l-[1px] border-accent-dark bg-background">
          <FeedCard />
          <FeedCard />
        </div>
        {/* Extra Content */}
        <div className="hidden md:col-span-3 md:block"></div>
      </div>
    </div>
  );
}
