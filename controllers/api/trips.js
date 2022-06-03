const Trip = require('../../models/Trip')

// Finds all trips
async function index(req, res) {
    try {
        const trips = await Trip.find({})
        res.status(200).json(trips)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Finds a trip
async function show(req, res) {
    try {
        const foundTrip = await Trip.findById(req.params.id)
        res.status(200).json(foundTrip)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Adds new trip 
async function create(req, res) {
    try {
        const createdTrip = await Trip.create(req.body)
        res.status(200).json(createdTrip)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Update a trip
async function update(req, res) {
    try {
        const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedTrip)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Deletes a trip
async function remove(req, res) {
    try {
        const updatedTrip = await Trip.findByIdAndDelete(req.params.id)
        res.status(200).json(updatedTrip)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

module.exports = {
    index,
    create,
    show,
    update,
    remove
}