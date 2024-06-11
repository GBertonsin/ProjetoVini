import { Router } from "express";
import { findOne, get, register, remove, update } from "../Controllers/observacaoController.js";
const router = Router();

router.get("/", get);
router.get("/:observacao_id", findOne);
router.post("/", register);
router.put("/:observacao_id", update);
router.delete("/:observacao_id", remove);
export default router;
