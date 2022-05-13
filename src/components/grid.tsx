import { ReactNode} from "react";
import "./grid.css"
type Props = {children: ReactNode}

export const Grid = ({children}: Props) => {
    return (<div className={"grid-container"}><main className={"bingo-grid"}>{children}</main></div>);
}