import Image from "next/image";

interface PolicyProps {
  contents?: string[];
  imagePath?: string;
  imageAlt?: string;
}

const Policy = ({ contents, imagePath, imageAlt }: PolicyProps) => {
  const image = imagePath ?? "/kokos_laying.PNG";
  const alt = imageAlt ?? "a white cat spreading out";

  return (
    <div>
      {contents?.map((row, index) => (
        <div
          className="flex items-center bg-linear-to-r from-gray-600 from-60% to-gray-900/90 h-15 my-5 overflow-hidden text-xl border border-gray-700/90 rounded shadow-black/50 shadow-xl hover:border-sky-500/50 hover:shadow-sky-500/50"
          key={`policy row ${index}`}
        >
          <div className="h-full w-1/4 bg-blue-950 skew-x-25 border-r-[15px] border-indigo-900 translate-x-[-25%] shadow-[15px_0_0_#1e40af]"></div>
          <div className="text-shadow-black text-shadow-lg/50 w-1/2 m-5 py-3">
            {row}
          </div>
        </div>
      ))}
      <Image
        src={image}
        alt={alt}
        width={300}
        height={300}
        className="mt-10 mx-auto"
      />
    </div>
  );
};

export default Policy;
