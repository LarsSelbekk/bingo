import "./bingo-alert.css"

export const BingoAlert = ({open, onClick}: { open: boolean, onClick: () => void }) => {
    return (
        <div className={"container-container"} onClick={onClick}>
            <div className={"container"}>
                <p>
                    {"Bingo!!".split("").map((value, index) => (<div className={"bouncing"} style={{animationDelay: -index*Math.random()+"s"}}>{value}</div>))}
                </p>
            </div>
        </div>
    )
}