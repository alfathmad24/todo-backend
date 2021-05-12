const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();

router.delete("/:id", todoController.deleteTodo);
router.post("/", todoController.addTodo);
router.get("/", todoController.getTodo);

module.exports = router;
