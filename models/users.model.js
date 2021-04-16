const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  birthday: {
    type: Date,
    default: new Date()
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', usersSchema);
