import dotenv from "dotenv";
import { dbSneaker } from "../models/dbsneakers.model.js";
dotenv.config();

export const sneakerController = {
  getSneakers: async () => {
    try {
      const sneakerCollection = dbSneaker;
      const data = await sneakerCollection.find({visible: true });
      return data.map((sneaker) => sneaker.toObject());
    } catch (err) {
      console.log(`FAILED TO GET SNEAKERS :: ${err}`);
    }
  },

  getSneaker: async (id) => {
    const sneakerCollection = dbSneaker;
    try {
      if (id.length) {
        const sneaker = await sneakerCollection.findOne({ id });
        return sneaker;
      }
      return {};
    } catch (err) {
      console.log(`FAILED TO GET SNEAKER :: ${err}`);
    }
  },
};