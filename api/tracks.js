import { getTrackById, getTracks } from "#db/queries/tracks";
import express from "express";
const router = express.Router();
export default router;

router.get('/', (req,res) => {
  res.send(getTracks());
});

router.get(`/:id`, (req,res) => {
  const {id} = req.params;
  const track = getTrackById(id);
  res.send(track);
})