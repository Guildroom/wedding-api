const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    comment:{
        type: String,
        required: true
    },
    createAt : {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('comment',commentSchema)