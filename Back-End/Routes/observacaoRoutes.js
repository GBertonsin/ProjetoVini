const express = require("express");
const router = express.Router();
const observacaoController = require("../Controllers/observacaoController");

router.get("/", observacaoController.get);
router.get("/:observacao_id", observacaoController.findOne);
router.post("/", observacaoController.register);
router.put("/:observacao_id", observacaoController.update);
router.delete("/:observacao_id", observacaoController.delete);
module.exports = router;
