import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";

import { useState, useEffect } from "react";

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
}

const PartyMember = (props: PartyMemberProps) => {
  const [hp, setHp] = useState({
    hp: 0,
    remaining: 0,
    lost: 0,
  });

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

  const fontFirst = props.fonts.first.className;
  const fontSecond = props.fonts.second.className;
  const outlineDark =
    "[text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000]";
  const outLineWhite =
    "[text-shadow:_1px_1px_1_#fff,_-1px_-1px_1_#fff,_1px_-1px_1_#fff,_-1px_1px_1_#fff]";

  return (
    <div className="flex flex-col gap-3 max-w-100 sm:max-w-[250px] pt-50 md:pt-30 pb-5 md:pb-0">
      <div className="transition-shadow duration-200 hover:shadow-[0_0_20px_5px_#0ea5e9] hover:border-1 hover:border-sky-500/50">
        <div className="bg-gray-600/95 border border-black rounded-[1px] h-[200px] flex flex-col gap-4 shadow-xl/30 shadow-black">
          <div className="relative">
            <h3
              className={`uppercase absolute right-2 top-[-10px] text-neutral-400 text-sm font-bold ${outlineDark} ${fontSecond}`}
            >
              {props.headers[0]}
            </h3>
          </div>
          {/* image  */}
          <div className="h-30">
            <div className="relative">
              <Image
                className="w-70 md:w-50 absolute top-[-180px] md:top-[-120px] left-[15%] md:left-[10%] mask-b-from-80% mask-r-from-90% mask-l-from-90%"
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
                  <span className={`${fontSecond} text-xl`}>{props.level}</span>
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
                <span className={`${fontSecond} text-sm text-neutral-400`}>
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
                <span className={`${fontSecond} text-sm text-neutral-400`}>
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
              className={`uppercase absolute right-2 top-[-10px] text-neutral-400 text-sm font-bold [text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000] ${fontSecond}`}
            >
              {props.headers[1]}
            </h3>
          </div>

          <table className="table-fixed border-separate m-2 w-[90%]">
            <tbody className={`text-shadow-lg/30 text-shadow-black text-lg`}>
              <tr>
                <td>Strength</td>
                <td>
                  <span
                    className={`uppercase text-sky-400 ${outlineDark} ${fontSecond}`}
                  >
                    {props.strength}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Wisdom</td>
                <td>
                  <span
                    className={`uppercase text-sky-400 ${outlineDark} ${fontSecond}`}
                  >
                    {props.wisdom}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Status</td>
                <td>
                  <span
                    className={`uppercase text-sky-400 ${outlineDark} ${fontSecond}`}
                  >
                    {props.status}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Ultimate</td>
                <td>
                  <span
                    className={`uppercase text-sky-400 ${outlineDark} ${fontSecond}`}
                  >
                    {props.ultimate}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="align-top">Abilites</td>
                <td>
                  <span className={`italic ${outlineDark} text-sm`}>
                    <ul>
                      <li>{props.abilities.first}</li>
                      <li>{props.abilities.second}</li>
                      <li>{props.abilities.third}</li>
                    </ul>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PartyMember;
