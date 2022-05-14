import {SongData} from "../helper-functios";
import React from "react";

type Props = {
    songs: SongData[] | undefined,
    updateScore: (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => void
}
type SongProps = {
    title: string;
    artist: string;
    country: string;
    score?: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Song = ({artist, country, score, title, onChange}: SongProps) => {
    return <tr>
        <td>
            {artist}
        </td>
        <td>
            {country}
        </td>
        <td>
            {title}
        </td>
        <td>
            <input value={score} onChange={onChange}/>
        </td>
    </tr>
}
export const SongTable = ({songs, updateScore}: Props) => {
    return <table className={"table"}>
        <thead>
        <th>country</th>
        <th>artist</th>
        <th>song</th>
        <th>score</th>
        </thead>
        <tbody>

        {songs && songs.map(({artist, country, score, song}, index) =>
         (<Song title={song} artist={artist} country={country} score={score} onChange={updateScore(index)}/>)
        )}
        </tbody></table>
}