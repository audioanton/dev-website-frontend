import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NextFont } from "next/dist/compiled/@next/font";
import Modal from "./Modal";
import { useState } from "react";

export interface QuestData {
  title: string;
  subtitle: string;
  url: string;
  description: string;
  image: string;
  alt: string;
  status: "completed" | "in progress";
  xp: string;
  skills: {
    first: string;
    second: string;
    third: string;
  };
  font: NextFont;
}

function Quest(data: QuestData) {
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  const descriptionJsx = <div>{data.description}</div>;

  const completed =
    data.status === "completed" ? "text-green-500" : "text-amber-500";

  const outlineDark =
    "[text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000]";

  return (
    <div className="flex flex-col gap-3 md:max-w-[450px] mx-auto lg:mx-0 py-5 md:py-0">
      <div className="transition-shadow duration-200 hover:shadow-[0_0_20px_5px_#0ea5e9]">
        <div className="bg-gray-600/95 border border-black rounded-[1px] shadow-xl/30 shadow-black">
          <div className="relative w-full mb-2">
            <h3
              className={`absolute top-[-25px] left-5 text-4xl mb-3 text-shadow-lg/60`}
            >
              {data.title}
            </h3>
          </div>
          <div className="p-4">
            {/* 
            *
            image
            * 
            */}
            <div className="md:flex md:gap-4 relative">
              <div className="w-full md:w-60 transition-all transition-discrete group">
                <Link href={data.url} aria-label={`a link to ${data.title}`}>
                  <Image
                    className={`rounded-[2px] mx-auto mb-3 md:mb-0 group-hover:scale-105`}
                    src={data.image}
                    width={256}
                    height={256}
                    alt={data.alt}
                  />
                  <p className="absolute text-sky-500/90 font-bold text-lg top-0 md:opacity-0 text-shadow-lg/80 text-shadow-black md:scale-0 group-hover:opacity-100 group-hover:scale-100 duration-300 ease-out rounded bg-gray-950/20 p-2 shadow-black shadow-lg/30 text-center uppercase min-w-15">
                    link
                  </p>
                </Link>
              </div>
              {/* 
                *
                table
                * 
                */}
              <div className="w-full md:w-40">
                <table className="table-fixed w-40 border-spacing-y-4 md:mt-0 w-full">
                  <colgroup>
                    <col className="w-1/3"></col>
                    <col className="w-2/3"></col>
                  </colgroup>
                  <tbody>
                    <tr>
                      <td
                        className={`w-[50%] text-neutral-400 uppercase font-medium ${data.font.className} ${outlineDark}`}
                      >
                        Status
                      </td>
                      <td>
                        <span
                          className={`uppercase ${data.font.className} ${completed} ${outlineDark}`}
                        >
                          {data.status}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className={`w-[50%] text-neutral-400 uppercase font-medium ${data.font.className} ${outlineDark}`}
                      >
                        XP
                      </td>
                      <td>
                        <span
                          className={`uppercase text-lg ${data.font.className} ${outlineDark}`}
                        >
                          {data.xp}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className={`w-[50%] text-neutral-400 uppercase font-medium ${data.font.className} ${outlineDark} align-top`}
                      >
                        Skills
                      </td>
                      <td>
                        <ul
                          className={`uppercase italic list-none text-amber-500 ${outlineDark} flex flex-wrap max-w-full gap-x-3 gap-y-1 md:block md:gap-0`}
                        >
                          <li>{data.skills.first}</li>
                          <li>{data.skills.second}</li>
                          <li>{data.skills.third}</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={`w-full flex gap-1 pt-3 items-end`}>
              <h3
                className={`flex text-2xl ${outlineDark} text-neutral-400 ${data.font.className} items-end`}
              >
                {data.subtitle}
              </h3>
              <button
                className={`flex justify-end items-end uppercase transition-all italic transition-discrete hover:scale-120 hover:translate-y-[-5px] hover:translate-x-[-5px] hover:cursor-pointer hover:translate w-30 h-[50px] ${outlineDark} text-2xl text-sky-500`}
                onClick={() => setDescriptionOpen(true)}
              >
                read more
              </button>
              {/*
               *
               * Description Modal
               *
               */}
              <Modal
                isOpen={descriptionOpen}
                onClose={() => setDescriptionOpen(false)}
                content={descriptionJsx}
                buttonstyles="text-white text-shadow-lg/30 text-shadow-black text-2xl"
                dialogstyles="w-full md:w-200 px-15 md:px-10 text-white text-shadow-lg/30 text-shadow-black text-2xl shadow-[0_0_20px_5px_#0ea5e9] p-8 bg-gray-600 border border-black rounded-[1px]"
              ></Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quest;
