var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: String,
    category: String,
    passages: [
        { text: String, prevlink:  }
    ]
});

module.exports = mongoose.model('Game', schema);