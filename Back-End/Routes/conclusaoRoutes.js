import { Router } from "express";
import { findOne, get, register, remove, update } from "../Controllers/conclusaoController.js";
const router = Router();

router.get("/", get);
router.get("/:conclusao_id", findOne);
router.post("/", register);
router.put("/:conclusao_id", update);
router.delete("/:conclusao_id", remove);
export default router;
