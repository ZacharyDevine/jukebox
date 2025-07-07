import db from "../client.js";

export const createPlaylistTrack = async (playlistId, trackId) => {
  const sql = `
  insert into playlists_tracks (playlist_id, track_id)
  values ($1, $2)
  `;
  const {rows: track} = await db.query(sql, [playlistId, trackId]);
  return track;
};