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
    <div>
      <div>
        <h3>{props.headers[0]}</h3>
        <h3>{props.name}</h3>
        <p>Lv. {props.level}</p>
        <p>{props.xp}</p>
        <span>XP</span>
        <p>{props.hp}</p>
        <span>HP</span>
      </div>
      <div>
        <h3>{props.headers[1]}</h3>
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
