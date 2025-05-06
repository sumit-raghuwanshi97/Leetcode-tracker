const mongoose = require('mongoose');
const User = require('./user.model');

const groupSchema = new mongoose.Schema({
  
  groupname: {
    type: String,
    required: true,
    unique: true,
  },

  groupjoininglink: {
    type: String,
    required: true,
    unique: true,
  },

  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
});

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;
