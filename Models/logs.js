const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  entry: {
    type: String,
    required: true
  },
  shipBroken: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Logs', logsSchema);