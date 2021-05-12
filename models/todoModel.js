const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      currentTime: () => new Date(),
    },
  }
);

module.exports = mongoose.model("Todo", todoSchema);
