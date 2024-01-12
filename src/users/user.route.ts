import { Router } from "express";

import {
  createUser,
  getUser,
  getUserDetails,
  updateUser,
} from "./user.controller";

const router = Router();

router.get("/", getUser);
router.get("/:id", getUserDetails);
router.post("/", createUser);
router.put("/", updateUser);

export default router;
