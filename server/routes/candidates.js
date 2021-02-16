import express from "express";
import { getCandidates, createCandidate } from "../controllers/candidates.js";

const router = express.Router();

router.get("/", getCandidates);
router.post("/", createCandidate);

export default router;
