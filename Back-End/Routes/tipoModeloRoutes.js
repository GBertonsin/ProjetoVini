const express = require("express");
const router = express.Router();
const tipoModeloController = require("../Controllers/tipoModeloController.js");

router.get("/", tipoModeloController.get);
router.get("/:tipoModelo_id", tipoModeloController.findOne);
router.post("/", tipoModeloController.register);
router.put("/:tipoModelo_id", tipoModeloController.update);
router.delete("/:tipoModelo_id", tipoModeloController.delete);
module.exports = router;
