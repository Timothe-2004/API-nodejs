const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

let tasks = [];
let currentId = 1;

app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST 
app.post("/tasks", (req, res) => {
    const task = { id: currentId++, ...req.body };
    tasks.push(task);
    res.status(201).json(task);
});

// Get all 
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Get 
app.get("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send("Task not found");
    res.json(task);
});

// Update 
app.put("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send("Task not found");

    Object.assign(task, req.body);
    res.json(task);
});

// Delete 
app.delete("/tasks/:id", (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).send("Task not found");

    tasks.splice(taskIndex, 1);
    res.status(204).send();
});

app.listen(port, () => console.log("Server app listening on port " + port));