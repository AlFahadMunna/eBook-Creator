const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
});

const bookSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    title: {
      type: String,
      require: true,
    },
    subtitle: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      require: true,
    },
    coverImage: {
      type: String,
      default: "",
    },
    chapters: [chapterSchema],
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
