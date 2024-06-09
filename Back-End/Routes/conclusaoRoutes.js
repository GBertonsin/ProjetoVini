const express = require("express");
const router = express.Router();
const conclusaoController = require("../Controllers/conclusaoController");

router.get("/", conclusaoController.get);
router.get("/:conclusao_id", conclusaoController.findOne);
router.post("/", conclusaoController.register);
router.put("/:conclusao_id", conclusaoController.update);
router.delete("/:conclusao_id", conclusaoController.delete);
module.exports = router;
