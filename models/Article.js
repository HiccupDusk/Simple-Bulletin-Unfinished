const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  created: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model('Article', userSchema);
