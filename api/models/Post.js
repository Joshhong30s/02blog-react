const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: [String], // define categories as an array of strings
      required: false,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Post', PostSchema)
