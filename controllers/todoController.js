const HttpError = require("../models/http-error.js");
const Todo = require("../models/todoModel");

// @desc    Add Todo
// @route   POST /api/
// @access  Private
exports.addTodo = async (req, res, next) => {
  const { title, description } = req.body;

  const todo = new Todo({
    title,
    description,
  });

  try {
    await todo.save();
  } catch (err) {
    const error = new HttpError(
      500,
      "Creating daily activity failed, please try again later."
    );
    return next(error);
  }

  res.status(201).json(todo);
};

// @desc    Fetch Todo
// @route   GET /api/
// @access  Private
exports.getTodo = async (req, res, next) => {
  let todo;
  try {
    todo = await Todo.find();
  } catch (err) {
    const error = new HttpError(500, "Cant find your activities.");
    return next(error);
  }

  if (!todo) {
    const error = new HttpError(
      403,
      "Invalid credentials, could not find your activities."
    );
    return next(error);
  }

  res.json(todo);
};

// @desc    delete Todo
// @route   delete /api/
// @access  Private
exports.deleteTodo = async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(404);
    throw new Error("Product not found!");
  }

  await todo.remove();

  res.json({ message: "User removed!" });
};
