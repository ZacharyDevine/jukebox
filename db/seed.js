import db from "#db/client";
import { createPlaylist } from "./queries/playlist.js";
import { createPlaylistTrack } from "./queries/playlistTracks.js";
import { createTrack } from "./queries/tracks.js";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
  for(let i = 0; i < 20; i++){
    await createTrack(`track${i}`, 20);
  }
  for(let i = 0; i < 10; i++){
    await createPlaylist(`playlist${i}`, `dadawdawdawda`);
  }
  for(let i = 0; i < 20; i++){
    const playlistNum = Math.floor(Math.random() * 9);
    await createPlaylistTrack(playlistNum+1, i+1);
  }
}
