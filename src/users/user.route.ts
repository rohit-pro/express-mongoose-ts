import { Router } from "express";

import { getUser, getUserDetails } from "./user.controller";

const router = Router();

router.get("/", getUser);
router.get("/:id", getUserDetails);

export default router;
