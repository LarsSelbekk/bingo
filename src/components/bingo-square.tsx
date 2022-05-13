import clsx from "clsx";
import "./bingo-square.css"
type Props = {active: boolean, connectedVertical: boolean, connectedHorizontal: boolean}

export const BingoSquare = ({active, connectedHorizontal, connectedVertical}: Props) => {
    return (<div className={clsx("square", active && "active")} />);
}