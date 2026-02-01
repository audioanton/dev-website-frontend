"use client";

import { NextFont } from "next/dist/compiled/@next/font";

interface SidebarProps {
  select: (section: string) => void;
  content: string[];
  menuFont?: NextFont;
}

const Sidebar = ({ select, content, menuFont }: SidebarProps) => {
  const openMobileMenu = () => {
    // open
  };

  return (
    <>
      {/* desktop */}
      <div className="hidden md:block absolute right-0 top-0 w-1/4 h-full bg-black/30">
        <div className="absolute h-[125px] w-full">
          <div
            className={`absolute bottom-0 px-[20px] py-[15px] xl:px-[50px] text-neutral-400 text-sm font-bold [text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000]`}
          >
            <h3 className={menuFont?.className}>MENU</h3>
          </div>
        </div>
        <div className="flex flex-col items-start absolute top-[125px] px-[20px] py-[15px] xl:px-[50px]">
          {content.map((section, index) => (
            <button
              className={`text-xl ${menuFont?.className} text-shadow-lg/30 text-shadow-black`}
              key={index}
              onClick={() => select(section)}
            >
              {section.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      {/*


      */}
      {/* mobile */}
      <div className="md:hidden absolute right-0 top-0 h-[125px]">
        <div className="absolute bottom-0 right-0 px-[50px] py-[15px]">
          <button onClick={openMobileMenu}>menu</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
