const express = require("express");
const router = express.Router();
const tecnicaController = require("../Controllers/tecnicaController ");

router.get("/", tecnicaController.get);
router.get("/:tecnica_id", tecnicaController.findOne);
router.post("/", tecnicaController.register);
router.put("/:tecnica_id", tecnicaController.update);
router.delete("/:tecnica_id", tecnicaController.delete);
module.exports = router;
