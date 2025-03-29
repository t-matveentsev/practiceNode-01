import { createFakeSong } from "../utils/createFakeSong.js";
import { readSongs } from "../utils/readSongs.js";
import { writeSongs } from "../utils/writeSongs.js";

export const addOneSong = async () => {
  const songList = await readSongs();
  const newSong = createFakeSong();
  writeSongs([...songList, newSong]);
};

addOneSong();
