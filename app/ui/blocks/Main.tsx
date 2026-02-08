"use client";

import { ReactNode } from "react";

interface mainProps {
  name: string;
  selection: string;
  content: ReactNode;
}

const Main = ({ name, selection, content }: mainProps) => {
  let hiddenClass = name === selection ? "" : "hidden";

  return (
    <div className={`w-full md:w-3/4 ${hiddenClass}`}>
      <div className="absolute top-[125px] w-full md:w-3/4">
        <div className="px-5 md:px-[50px] xl:pl-[300px]">{content}</div>
      </div>
    </div>
  );
};

export default Main;
