import express from "express";
const app = express();
export default app;

import playlistRouter from "./api/playlist.js";
import tracksRouter from "./api/tracks.js";

app.use("/tracks", tracksRouter);
app.use("/playlists", playlistRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong.");
});
