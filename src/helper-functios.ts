import bingoElements from "./data/bingo.json"

function shuffleArray(arr: any[]) {
    arr.sort(() => Math.random() - 0.5);
}

function range(start: number, end: number) {
    var ans: number[] = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}


type bingoElement = { active: boolean, connectedVertical: boolean, connectedHorizontal: boolean, connectedDiagonal: boolean, text?: string }

const boardSize = 4
const newBingo = () => {
    shuffleArray(bingoElements)
    return bingoElements.slice(0, boardSize * boardSize).map((element: string) => ({
        active: false,
        connectedVertical: false,
        connectedHorizontal: false,
        connectedDiagonal: false,
        text: element
    }))
}

const update = (elements: bingoElement[]) => {
    const rows = evaluateRows(elements);
    const cols = evaluateCols(elements);

}

const evaluateRows = (elements: bingoElement[]) => {
    return elements.reduce((previousValue, currentValue, currentIndex) => {
        if (currentValue.active) previousValue[Math.floor(currentIndex / boardSize)] += 1;
        return previousValue
    }, range(0, boardSize)).map(value => value/boardSize===1)
}
const evaluateCols = (elements: bingoElement[]) => {
    return elements.reduce((previousValue, currentValue, currentIndex) => {
        if (currentValue.active) previousValue[Math.floor(currentIndex % boardSize)] += 1;
        return previousValue
    }, range(0, boardSize)).map(value => value/boardSize===1)
}