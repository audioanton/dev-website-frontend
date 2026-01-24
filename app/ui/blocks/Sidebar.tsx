"use client";

interface SidebarProps {
  select: (section: string) => void;
  content: string[];
}

const Sidebar = ({ select, content }: SidebarProps) => {
  const openMobileMenu = () => {
    // open
  };

  return (
    <>
      {/* desktop */}
      <div className="hidden md:block absolute right-0 top-0 w-1/4 h-full bg-blue-900 text-white">
        <div className="absolute h-[125px] w-full bg-pink-800">
          <div className="absolute bottom-0 px-[20px] py-[15px] xl:px-[50px]">
            Menu
          </div>
        </div>
        <div className="flex flex-col items-start absolute top-[125px] px-[20px] py-[15px] xl:px-[50px]">
          {content.map((section, index) => (
            <button key={index} onClick={() => select(section)}>
              {section}
            </button>
          ))}
        </div>
      </div>
      {/*


      */}
      {/* mobile */}
      <div className="md:hidden absolute right-0 top-0 h-[125px] text-white">
        <div className="absolute bottom-0 right-0 px-[50px] py-[15px]">
          <button onClick={openMobileMenu}>menu</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
