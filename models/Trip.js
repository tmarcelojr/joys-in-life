const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tripSchema = new Schema({
    destination: { type: String, required: true },
    name: String,
    startDate: Date,
    endDate: Date,
    activities: [
        {
            type: Schema.Types.ObjectId,
            ref: "Activity"
        }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model('Trip', tripSchema)