import clsx from "clsx";
import "./bingo-square.css"
import {useState} from "react";

type Props = { active: boolean, connectedVertical: boolean, connectedHorizontal: boolean, text?: string }

export const BingoSquare = ({active, connectedHorizontal, connectedVertical, text}: Props) => {
    const [active2, setActive] = useState(false)
    return (<div className={clsx("square")} onClick={() => setActive(!active2)}>
        <div className={clsx("square-inside", active2 && "active")}><span>{text}</span></div>
    </div>);
}