interface HeaderData {
  title: string;
  subtitle: string;
}

function Header(data: HeaderData) {
  return (
    <div className="absolute top-0 left-0 text-white bg-gray-950 w-full md:w-3/4 h-[125px]">
      <div className="absolute bottom-0 px-[50px] py-[15px] xl:px-[300px]">
        <h1 className="">{data.title}</h1>
        <h2>{data.subtitle}</h2>
      </div>
    </div>
  );
}

export default Header;
