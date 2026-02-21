import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";

import { useState, useEffect } from "react";
import Modal from "./Modal";

interface PartyMemberProps {
  headers: string[];
  name: string;
  xp: number;
  hp: number;
  level: number;
  strength: number;
  wisdom: number;
  status: string;
  abilities: {
    first: string;
    second: string;
    third: string;
  };
  ultimate: string;
  fonts: {
    first: NextFont;
    second: NextFont;
  };
  image: string;
  description?: string;
}

const PartyMember = (props: PartyMemberProps) => {
  const [hp, setHp] = useState({
    hp: 0,
    remaining: 0,
    lost: 0,
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const random = Math.floor(Math.random() * 5);

    const fractions = [
      {
        remaining: 50,
        lost: 50,
      },
      {
        remaining: 80,
        lost: 20,
      },
      {
        remaining: 40,
        lost: 60,
      },
      {
        remaining: 60,
        lost: 40,
      },
      {
        remaining: 20,
        lost: 80,
      },
    ];

    setHp({
      hp: Math.floor((props.hp / 100) * fractions[random].remaining),
      remaining: fractions[random].remaining,
      lost: fractions[random].lost,
    });
  }, []);

  const subtitleFont = props.fonts.second.className;
  const outlineDark =
    "[text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000]";

  const openModal = () => {
    if (props.description) {
      console.log("open");
      setOpen(true);
    }
  };

  const hoverDiv = props.description ? "hover:cursor-pointer" : "";

  return (
    <>
      {/* optional description modal */}
      {props.description && (
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          content={props.description}
          buttonstyles="text-white text-shadow-lg/30 text-shadow-black text-2xl"
          dialogstyles="w-full md:w-200 px-15 md:px-20 text-white text-shadow-lg/70 text-shadow-black text-2xl shadow-[0_0_20px_5px_#0ea5e9] p-8 bg-gray-600 border border-black rounded-[1px]"
        />
      )}
      <div
        onClick={openModal}
        className={`flex flex-col gap-3 w-full sm:max-w-[250px] pt-45 md:pt-30 pb-5 md:pb-0 ${hoverDiv}`}
      >
        <div className="transition-shadow duration-200 hover:shadow-[0_0_20px_5px_#0ea5e9] hover:border-1 hover:border-sky-500/50">
          <div className="bg-gray-600/95 border border-black rounded-[1px] h-[200px] flex flex-col gap-4 shadow-xl/30 shadow-black">
            <div className="relative">
              <h3
                className={`uppercase absolute right-2 top-[-10px] text-neutral-400 text-sm font-bold ${outlineDark} ${subtitleFont}`}
              >
                {props.headers[0]}
              </h3>
            </div>
            {/* image  */}
            <div className="h-30">
              <div className="relative">
                <Image
                  className="w-70 md:w-50 absolute top-[-180px] md:top-[-120px] right-1/2 translate-x-1/2 mask-b-from-80% mask-r-from-90% mask-l-from-90%"
                  src={props.image}
                  width={300}
                  height={300}
                  alt=""
                ></Image>
              </div>
            </div>
            {/* card stats */}
            <div className="h-70">
              <div>
                <span className="flex justify-between items-end">
                  <h3
                    className={`mx-2 text-shadow-lg/30 text-shadow-black text-4xl`}
                  >
                    {props.name}
                  </h3>
                  <p className={`mx-2 ${outlineDark}`}>
                    Lv.{" "}
                    <span className={`${subtitleFont} text-xl`}>
                      {props.level}
                    </span>
                  </p>
                </span>
                <div className="mx-2 h-[2px] border shadow-3xl/30 border-black flex justify-between">
                  <div className="bg-amber-500 w-3/4 h-[2px]"></div>
                  <div className="bg-neutral-300/95 w-1/4 h-[2px]"></div>
                </div>
                <p
                  className={`mx-2 text-xl text-shadow-lg/30 ${outlineDark} mb-3`}
                >
                  {props.xp}
                  <span className={`${subtitleFont} text-sm text-neutral-400`}>
                    {" "}
                    XP
                  </span>
                </p>
                <div className="mx-2 h-[2px] border shadow-3xl/30 border-black flex justify-between">
                  <div
                    style={{ width: `${hp.remaining}%` }}
                    className={`bg-red-600 h-[2px]`}
                  ></div>
                  <div
                    style={{ width: `${hp.lost}%` }}
                    className="bg-neutral-300/95 h-[2px]"
                  ></div>
                </div>
                <p className={`mx-2 text-xl text-shadow-lg/30 ${outlineDark}`}>
                  {hp.hp}
                  <span className="text-sm">/{props.hp}</span>
                  <span className={`${subtitleFont} text-sm text-neutral-400`}>
                    {" "}
                    HP
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* card abilities */}
          <div className="bg-gray-600/95 border border-black rounded-[1px] mt-[5px] min-h-[150px] shadow-xl/30 shadow-black">
            <div className="relative">
              <h3
                className={`uppercase absolute right-2 top-[-10px] text-neutral-400 text-sm font-bold [text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000] ${subtitleFont}`}
              >
                {props.headers[1]}
              </h3>
            </div>
            {/* 
          
          stats table
                    
          */}
            <div className="grid grid-cols-3 md:block m-2 text-shadow-lg/30 text-shadow-black text-lg">
              <table className="table-fixed border-separate col-span-2 md:w-full">
                <colgroup>
                  <col className="w-1/3 md:w-1/3"></col>
                  <col className="w-2/3 md:w-2/3"></col>
                </colgroup>
                <tbody>
                  <tr>
                    <td className="pr-4">Strength</td>
                    <td>
                      <span
                        className={`uppercase text-sky-400 ${outlineDark} ${subtitleFont}`}
                      >
                        {props.strength}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="pr-4">Wisdom</td>
                    <td>
                      <span
                        className={`uppercase text-sky-400 ${outlineDark} ${subtitleFont}`}
                      >
                        {props.wisdom}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="pr-4">Status</td>
                    <td>
                      <span
                        className={`uppercase text-sky-400 ${outlineDark} ${subtitleFont}`}
                      >
                        {props.status}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="pr-4">Ultimate</td>
                    <td>
                      <span
                        className={`uppercase text-sky-400 ${outlineDark} ${subtitleFont}`}
                      >
                        {props.ultimate}
                      </span>
                    </td>
                  </tr>
                  <tr className="hidden md:table-row">
                    <td className="align-top pr-4">Abilities</td>
                    <td>
                      <span className={`italic ${outlineDark} text-sm`}>
                        <ul className="list-none">
                          <li>{props.abilities.first}</li>
                          <li>{props.abilities.second}</li>
                          <li>{props.abilities.third}</li>
                        </ul>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Mobile Abilities section */}
              <div className="col-span-1 md:hidden">
                <p className="align-top">Abilities</p>
                <div className="mb-3 h-[2px] shadow-lg shadow-sky-500/90 border-black">
                  <div className="h-[2px] w-full bg-white/60"></div>
                </div>
                <span className={`italic ${outlineDark} text-sm`}>
                  <ul>
                    <li>{props.abilities.first}</li>
                    <li>{props.abilities.second}</li>
                    <li>{props.abilities.third}</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartyMember;
