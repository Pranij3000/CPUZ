import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadData = (fileName) => {
	const filePath = path.join(__dirname, "../data", fileName);
	const json = fs.readFileSync(filePath, "utf-8");
	return JSON.parse(json);
};

router.get("/cpu", (req, res) => res.json(loadData("cpu.json")));
router.get("/gpu", (req, res) => res.json(loadData("gpu.json")));
router.get("/motherboard", (req, res) => res.json(loadData("motherboard.json")));
router.get("/memory", (req, res) => res.json(loadData("memory.json")));
router.get("/storage", (req, res) => res.json(loadData("storage.json")));
router.get("/powersupply", (req, res) => res.json(loadData("powersupply.json")));
router.get("/case", (req, res) => res.json(loadData("case.json")));
router.get("/cooling", (req, res) => res.json(loadData("cooling.json")));
router.get("/monitor", (req, res) => res.json(loadData("monitor.json")));

export default router;
