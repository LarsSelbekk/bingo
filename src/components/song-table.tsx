import {SongData} from "../helper-functios";
import React from "react";
import "./song-table.css"
type Props = {
    songs: SongData[] | undefined,
    updateScore: (index: number) => (mode: string) => (event: React.ChangeEvent<HTMLInputElement>) => void
}
type SongProps = SongData & {
    onChange: (mode: string) => (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Song = ({artist, country, onChange, song, songScore, sceneScore, originalScore}: SongProps) => {
    return <tr>
        <td>
            {country}
        </td>
        <td>
            {artist}
        </td>
        <td>
            {song}
        </td>
        <td>
            <input defaultValue={songScore} onBlur={onChange("song")} type={"number"} min={0} max={10} step={0.1}/>
        </td>
        <td>
            <input defaultValue={sceneScore} onBlur={onChange("scene")}  type={"number"}  min={0} max={10} step={0.1}/>
        </td>
        <td>
            <input defaultValue={originalScore} onBlur={onChange("original")}  type={"number"}  min={0} max={10} step={0.1}/>
        </td>
    </tr>
}
export const SongTable = ({songs, updateScore}: Props) => {
    return <div className={"song-table-container"}><table className={"table song-table"}>
        <thead>
        <tr>
        <th>country</th>
        <th>artist</th>
        <th>song</th>
        <th>song quality</th>
        <th>show quality</th>
        <th>originality</th>
        </tr>
        </thead>
        <tbody>

        {songs && songs.map(({artist, country, song, songScore, sceneScore, originalScore}, index) =>
         (<Song key={country} song={song} artist={artist} country={country} songScore={songScore} sceneScore={sceneScore} originalScore={originalScore} onChange={updateScore(index)}/>)
        )}
        </tbody></table></div>
}