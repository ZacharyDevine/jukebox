import db from "../client.js";

export const createPlaylist = async (name, description) => {
  const sql = `
  insert into playlist (name, description)
  values ($1, $2)
  `;
  const {rows: playlist} = await db.query(sql, [name, description]);
  return playlist;
};
