const mongoose = require('mongoose')
const Schema = mongoose.Schema

const activitySchema = new Schema({
    type: String,
    notes: String,
    tags: [{
        type: Schema.Types.ObjectId,
        ref: "Tag"
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Activity', activitySchema)