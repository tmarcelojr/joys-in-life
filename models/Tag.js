const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagSchema = new Schema({
    name: String,
    slug: String,
    activities: [
        {
            type: Schema.Types.ObjectId,
            ref: "Activity"
        }
    ]
})

module.exports = mongoose.model('Tag', tagSchema)