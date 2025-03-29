import { readSongs } from "../utils/readSongs.js";
import { writeSongs } from "../utils/writeSongs.js";

const removeLastSong = async () => {
  const songList = await readSongs();
  songList.pop();
  await writeSongs(songList);
};

removeLastSong();
