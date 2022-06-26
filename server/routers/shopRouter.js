import { Router } from "express";
const router = Router();
import Shop from "../schema/shop.js";

//Get all
router.get("/api/shop", async (req, res) => {
    const shops = await Shop.find({});
  
    try {
      res.send(shops);
    } catch (error) {
      res.status(500).send(error);
    }
  });

export default router;