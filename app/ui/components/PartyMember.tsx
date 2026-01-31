interface CardProps {
  headers: string[];
  name: string;
  xp: number;
  hp: number;
  level: number;
  strength: number;
  wisdom: number;
  status: string;
  abilities: string[];
  ultimate: string;
}

const Card = (props: CardProps) => {
  const getHp = () => {
    // calculate random number from max hp
  };

  return (
    <div className="md:max-w-1/3 flex flex-col gap-4">
      <div className="relative bg-black rounded-[1px]">
        <h3
          className={`uppercase absolute right-2 top-[-10px] text-neutral-400 text-sm font-bold [text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000]`}
        >
          {props.headers[0]}
        </h3>
        <h3>{props.name}</h3>
        <p>Lv. {props.level}</p>
        <p>{props.xp}</p>
        <span>XP</span>
        <p>{props.hp}</p>
        <span>HP</span>
      </div>
      <div className="relative w-s bg-green-700 rounded-[1px]">
        <h3
          className={`uppercase absolute right-2 top-[-10px] text-neutral-400 text-sm font-bold [text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000]`}
        >
          {props.headers[1]}
        </h3>
        <ul>
          <li>strength {props.strength}</li>
          <li>wisdom {props.wisdom}</li>
          <li>status {props.status}</li>
          <li>ultimate {props.ultimate}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
