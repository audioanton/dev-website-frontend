import { NextFont } from "next/dist/compiled/@next/font";

interface HeaderData {
  title: string;
  subtitle: string;
  titleFont?: NextFont;
}

function Header({ title, subtitle, titleFont }: HeaderData) {
  return (
    <div className="relative top-0 md:absolute md:left-0 w-full md:w-3/4 h-[125px]">
      <div className="relative bottom-0 px-[50px] py-[15px] xl:px-[300px]">
        <h1
          className={`${titleFont?.className} text-neutral-400 text-shadow-lg/30 text-shadow-black text-sm font-bold [text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000]`}
        >
          {title}
        </h1>
        <h2 className="text-5xl text-shadow-lg/30 text-shadow-black">
          {subtitle}
        </h2>
        <div className="mt-2 h-[2px] bg-linear-to-r from-slate-950 to-white w-50 blur-[1px]"></div>
      </div>
    </div>
  );
}

export default Header;
