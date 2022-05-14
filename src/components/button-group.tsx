import {ReactNode} from "react";
import "./button-group.css"
type ButtonGroupProps = {
    children: ReactNode
}

export const ButtonGroup = ({children}: ButtonGroupProps) => {
    return (<div className={"button-group"}>{children}</div>)
}