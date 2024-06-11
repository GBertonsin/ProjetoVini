import { Router } from "express";
import { findOne, get, register, remove, update } from "../Controllers/tecnicaController.js";
const router = Router();

router.get("/", get);
router.get("/:tecnica_id", findOne);
router.post("/", register);
router.put("/:tecnica_id", update);
router.delete("/:tecnica_id", remove);
export default router;
