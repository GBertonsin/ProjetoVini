const express = require("express");
const router = express.Router();
const comentarioController = require("../Controllers/comentarioController");

router.get("/", comentarioController.get);
router.get("/:comentario_id", comentarioController.findOne);
router.post("/", comentarioController.register);
router.put("/:comentario_id", comentarioController.update);
router.delete("/:comentario_id", comentarioController.delete);
module.exports = router;
