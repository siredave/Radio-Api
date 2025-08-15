import express from "express";
import { getStreamInfo, proxyStream } from "../controllers/stream.controller.js";

const router = express.Router();

// Metadata endpoint
router.get("/stream", getStreamInfo);

// Proxy streaming endpoint
router.get("/radio", proxyStream);

export default router;
