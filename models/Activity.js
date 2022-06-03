const mongoose = require('mongoose')
const Schema = mongoose.Schema

const activitySchema = new Schema({
    type: String,
    notes: String,
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag"
    }]
})

module.exports = mongoose.model('Activity', activitySchema)