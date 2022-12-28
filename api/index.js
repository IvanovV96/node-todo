const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getOneTask,
  addContact,
  updateContact,
  updateTaskStatus,
  deleteTask,
} = require("../controllers");

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getOneTask);

router.post("/tasks", addContact);

router.put("/tasks/:id", updateContact);

router.patch("/tasks/:id/status", updateTaskStatus);

router.delete("/tasks/:id", deleteTask);

module.exports = router;
