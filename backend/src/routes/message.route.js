import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getMessagesByUserId,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controllers.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessagesByUserId);
router.get("/send/:id", protectRoute, sendMessage);

export default router;
