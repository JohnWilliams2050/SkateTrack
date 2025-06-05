import express from "express";
import { getActivities, addActivity, deleteActivity } from "../controllers/activity.controller.js";

const router = express.Router();

router.get("/:userId", getActivities);
router.post("/", addActivity);
router.delete("/:id", deleteActivity);

export default router;