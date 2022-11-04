const express = require("express");
const router = express.Router();
const shortcuts = require("../Controllers/ShortcutControllers");

router.get("/", shortcuts.list);
router.get("/:id", shortcuts.listById);
router.post("/", shortcuts.create);
router.put("/:id", shortcuts.edit);

module.exports = router;