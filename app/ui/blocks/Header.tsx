interface HeaderData {
  title: string;
  subtitle: string;
}

function Header({ title, subtitle }: HeaderData) {
  return (
    <div className="absolute top-0 left-0 text-white bg-gray-800 w-full md:w-3/4 h-[125px]">
      <div className="absolute bottom-0 px-[50px] py-[15px] xl:px-[300px]">
        <h1 className="text-neutral-400 text-sm font-bold [text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000]">
          {title}
        </h1>
        <h2 className="text-2xl text-shadow-lg/30">{subtitle}</h2>
        <div className="h-[2px] bg-linear-to-r from-slate-950 to-white w-50"></div>
      </div>
    </div>
  );
}

export default Header;
