const Trip = require('../../models/Trip')

async function index(req, res) {
    try {
        // Finds all trips
        const trips = await Trip.find({})
        res.status(200).json(trips)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

async function create(req, res) {
    try {
        // Adds new trip
        const createdTrip = await Trip.create(req.body)
        res.status(200).json(createdTrip)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

module.exports = {
    index,
    create
}