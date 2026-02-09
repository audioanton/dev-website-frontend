import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NextFont } from "next/dist/compiled/@next/font";

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
  const completed =
    data.status === "completed" ? "text-green-500" : "text-amber-500";

  const outlineDark =
    "[text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000]";

  return (
    <div className="flex flex-col gap-3 max-w-full md:max-w-[450px] mx-auto lg:mx-0">
      <div className="transition-shadow duration-200 hover:shadow-[0_0_20px_5px_#0ea5e9]">
        <div className="bg-gray-600/95 border border-black rounded-[1px] pb-4 min-h-[450px] shadow-xl/30 shadow-black">
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
            <div className="md:flex md:gap-4">
              <span className="w-full md:w-60">
                <Link href={data.url}>
                  <Image
                    className={`rounded-[2px] mx-auto mb-3 md:mb-0`}
                    src={data.image}
                    width={256}
                    height={256}
                    alt={data.alt}
                  />
                </Link>
              </span>
              {/* 
                *
                table
                * 
                */}
              <span className="w-full md:w-40">
                <table className="table-fixed w-40 border-spacing-y-4 md:mt-0 w-full">
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
                          className={`uppercase italic list-none text-amber-500 ${outlineDark} flex gap-3 md:block md:gap-0`}
                        >
                          <li>{data.skills.first}</li>
                          <li>{data.skills.second}</li>
                          <li>{data.skills.third}</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </span>
            </div>
          </div>
          <div className={`mx-4`}>
            <h3
              className={`text-2xl ${outlineDark} text-neutral-400 ${data.font.className}`}
            >
              {data.subtitle}
            </h3>
            <p className={`text-lg text-shadow-lg/50`}>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quest;
