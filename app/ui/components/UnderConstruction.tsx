import Image from "next/image";

const UnderConstruction = () => {
  return (
    <div>
      <h2 className="text-2xl my-5">Oops.. This does not exist. Yet.</h2>
      <Image
        src="/kokos_laying.PNG"
        alt="a white cat spreading out"
        width={300}
        height={225}
      />
    </div>
  );
};

export default UnderConstruction;
