import express from "express";
import { sneakerController } from "../controllers/dbsneakers.controllers.js";
const { getSneaker, getSneakers } = sneakerController;

const router = express.Router();

router.get("/kix", async (req, res) => {
  const sneakers = await getSneakers({});
  res
    .status(200)
    .send({ msg: "Successfully queried for sneakers!", data: { sneakers } });
});

router.get("/kix/:id", async (req, res) => {
  const id = req.params?.id;
  const sneaker = await getSneaker(id);
  if (sneaker?.name == null && id.length) {
    res.status(404).send({ msg: "Unsuccessfully queried a sneaker", data: {} });
  } else {
    res
      .status(200)
      .send({ msg: "Successfully queried a sneaker!", data: { sneaker } });
  }
});

export { router as dbsneakerRouter };