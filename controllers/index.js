const { nanoid } = require("nanoid");
let tasks = [
  {
    id: nanoid(),
    title: "Study",
    text: "Now!",
    done: false,
  },
];

const getAllTasks = (req, res) => {
  res.json({
    status: "Success",
    code: 200,
    data: { tasks },
  });
};

const getOneTask = (req, res) => {
  const { id } = req.params;
  const [task] = tasks.filter((task) => task.id === id);
  res.json({
    status: "Success",
    code: 201,
    data: { task },
  });
};

const addContact = (req, res) => {
  const { title, text } = req.body;
  const task = { id: nanoid(), title, text, done: false };
  tasks.push(task);
  res.json({
    status: "Success",
    code: 200,
    data: { task },
  });
};

const updateContact = (req, res) => {
  const { id } = req.params;
  const { title, text } = req.body;
  const [task] = tasks.filter((task) => task.id === id);
  task.title = title;
  task.text = text;
  res.json({ status: "Success", code: 200, data: { task } });
};

const updateTaskStatus = (req, res) => {
  const { id } = req.params;
  const { done } = req.body;
  const [task] = tasks.filter((task) => task.id === id);
  task.done = done;
  res.json({ status: "Success", code: 200, data: { task } });
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  const newTasks = tasks.filter((task) => task.id !== id);
  tasks = [...newTasks];
  res.status(204).json();
};

module.exports = {
  getAllTasks,
  getOneTask,
  addContact,
  updateContact,
  updateTaskStatus,
  deleteTask,
};
