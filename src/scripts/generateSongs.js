import { createFakeSong } from "../utils/createFakeSong.js";
import { readSongs } from "../utils/readSongs.js";
import { writeSongs } from "../utils/writeSongs.js";

const generateSongs = async (number) => {
  const songList = await readSongs();
  const newSongs = Array(number).fill(0).map(createFakeSong);
  await writeSongs([...songList, ...newSongs]);
};

generateSongs(5);
