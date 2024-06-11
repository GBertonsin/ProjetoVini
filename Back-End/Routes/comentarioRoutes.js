import { Router } from "express";
import { findOne, get, register, remove, update } from "../Controllers/comentarioController.js";
const router = Router();

router.get("/", get);
router.get("/:comentario_id", findOne);
router.post("/", register);
router.put("/:comentario_id", update);
router.delete("/:comentario_id", remove);
export default router;
