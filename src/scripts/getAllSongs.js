import { readSongs } from "../utils/readSongs.js";

export const getAllSongs = () => readSongs();

console.log(await getAllSongs());
