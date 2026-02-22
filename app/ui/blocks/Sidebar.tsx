"use client";

import { NextFont } from "next/dist/compiled/@next/font";
import Modal from "../components/Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SidebarProps {
  sections: string[];
  menuFont: NextFont;
  active: string;
  policies: string[];
}

const Sidebar = ({ sections, menuFont, active, policies }: SidebarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const router = useRouter();

  const select = (title: string) => {
    const path = title === "Party" ? "/" : `/${title.toLowerCase()}`;
    router.push(path, { scroll: false });
  };

  const openMobileMenu = () => {
    setMobileOpen(true);
  };

  const closeMobileMenu = (section?: string) => {
    if (section) {
      select(section);
    }
    setMobileOpen(false);
  };

  const menuContent = (
    active: string,
    content: string[],
    closeMobileMenu?: (section: string) => void,
    isPolicies?: boolean,
  ) => {
    const callback = closeMobileMenu ? closeMobileMenu : select;

    const activeButton = `text-amber-500 text-2xl`;

    const sectionJsx = (section: string) => {
      return (
        <div className="my-1">
          <button
            className={`${section === active ? activeButton : "text-xl text-white"} text-shadow-lg/30 text-shadow-black relative z-1 transition-all group-hover:scale-125 group-hover:translate-x-5 group-hover:my-3 ${menuFont.className}`}
            onClick={() => callback(section)}
          >
            {section.toUpperCase()}
          </button>
          <div
            className={`z-0 mt-[-18px] h-[6px] w-full group-hover:opacity-50 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300 ease-out bg-linear-to-r from-sky-400 from-10% via-blue-700 to-blue-950 to-70% shadow-[0_0_10px_#0ea5e9] border border-sky-500/50 pointer-events-none`}
          ></div>
        </div>
      );
    };

    const policyJsx = (policy: string) => {
      return (
        <button
          className={`${policy === active ? activeButton : "text-md text-neutral-400"} text-shadow-lg/50 text-shadow-black relative z-1 transition-all group-hover:scale-125 group-hover:translate-x-5 ${menuFont.className}`}
          onClick={() => callback(policy)}
        >
          {policy.toUpperCase()}
        </button>
      );
    };

    return (
      <div className={`flex flex-col items-start`}>
        {isPolicies ? (
          <div
            className={`h-[4px] w-full bg-linear-to-r from-gray-800 from-20% via-gray-700 to-gray-600 to-95% opacity-50 mb-2`}
          ></div>
        ) : (
          ""
        )}
        {content.map((section) => (
          <div
            className="w-[70%] md:w-full relative group"
            key={`menu item ${section}`}
          >
            {isPolicies ? policyJsx(section) : sectionJsx(section)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* desktop */}
      <div className="hidden md:block absolute right-0 top-0 w-1/4 h-full bg-black/30">
        <div className="absolute h-[125px] w-full">
          <div
            className={`absolute bottom-0 px-[20px] py-[15px] xl:px-[50px] text-neutral-400 text-sm font-bold [text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000]`}
          >
            <h3 className={`${menuFont?.className}`}>MENU</h3>
          </div>
        </div>
        <div className="w-full absolute top-[125px] px-[20px] py-[15px] xl:px-[50px]">
          {menuContent(active, sections)}
        </div>
        <div className="w-full absolute bottom-1/4 px-[20px] py-[15px] xl:px-[50px]">
          {menuContent(active, policies, select, true)}
        </div>
      </div>
      {/*


      */}
      {/* mobile */}
      <div className="md:hidden absolute right-0 top-0 h-[125px]">
        <div className="absolute bottom-0 right-0">
          <button
            onClick={openMobileMenu}
            className={`${menuFont?.className} w-25 h-25 text-2xl`}
          >
            MENU
          </button>
        </div>
      </div>

      <Modal
        isOpen={mobileOpen}
        onClose={closeMobileMenu}
        content={menuContent(
          active,
          [...sections, ...policies],
          closeMobileMenu,
        )}
        buttonstyles="text-white text-shadow-lg/30 text-shadow-black"
        dialogstyles="shadow-[0_0_20px_5px_#0ea5e9] p-8 bg-gray-600/90 border border-black rounded-[1px]"
      ></Modal>
    </>
  );
};

export default Sidebar;
