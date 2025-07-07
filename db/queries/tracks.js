import db from "../client.js";

export const createTrack = async (name, duration) => {
  const sql = `
  insert into tracks (name, duration_ms)
  values ($1, $2)
  `;
  const {rows: track} = await db.query(sql, [name, duration]);
  return track;
};

export const getTracks = async () => {
  const sql = `select * from tracks`;
  const {rows: tracks} = await db.query(sql);
  return tracks;
};

export const getTrackById = async (id) => {
  const sql = `select * from tracks where id = $1`;
  const {rows: tracks} = await db.query(sql, [id]);
  return tracks;
};