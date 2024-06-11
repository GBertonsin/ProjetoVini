import { Router } from "express";
import { findOne, get, register, remove, update } from "../Controllers/tipoModeloController.js";
const router = Router();

router.get("/", get);
router.get("/:tipoModelo_id", findOne);
router.post("/", register);
router.put("/:tipoModelo_id", update);
router.delete("/:tipoModelo_id", remove);

export default router;
