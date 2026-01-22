"use client";

import { PropsWithChildren } from "react";

interface mainProps extends PropsWithChildren {
  hidden?: string;
}

const Main = ({ hidden, children }: mainProps) => {
  return (
    <div
      className={`w-full h-screen md:w-3/4  bg-blue-500 text-white ${hidden}`}
    >
      <div className="absolute top-[125px]">
        <div className="px-[50px] py-[15px] xl:px-[300px]">{children}</div>
      </div>
    </div>
  );
};

export default Main;
