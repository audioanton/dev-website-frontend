import UnderConstruction from "../components/UnderConstruction";
import Image from "next/image";

interface PolicyProps {
  subtitle: string;
  contents?: string[];
  imagePath?: string;
  imageAlt?: string;
  icon?: string;
}

const Policy = ({
  subtitle,
  contents,
  imagePath,
  imageAlt,
  icon,
}: PolicyProps) => {
  const image = imagePath ?? "/kokos_laying.PNG";
  const alt = imagePath ? imageAlt : "a white cat spreading out";
  const listIcon = icon ?? "\u2714";

  return (
    <div>
      <h2 className="text-4xl my-5 text-center md:text-start col-span-4 mb-3 text-5xl md:text-6xl uppercase text-amber-500 [text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000] [object Object] [text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000]">
        {subtitle}
      </h2>
      <ul className="text-2xl my-10 md:max-w-3/4 p-3 bg-gray-600/95 border border-black rounded-[1px] shadow-xl/30 shadow-black text-neutral-300 text-shadow-lg/70 text-shadow-black">
        {contents?.map((row, index) => (
          <li key={`policy row ${index}`} className="my-4 mx-5">
            <span className="mr-4">{listIcon}</span> {row}
          </li>
        ))}
      </ul>
      <Image
        src={image}
        alt={alt}
        width={300}
        height={300}
        className="mt-10 mx-auto md:mx-0"
      />
    </div>
  );
};

export default Policy;
