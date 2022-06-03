const Activity = require('../../models/Activity')

// Finds all activities
async function index(req, res) {
    try {
        const activities = await Activity.find({}).populate('tags').exec()
        res.status(200).json(activities)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Finds a Activity
async function show(req, res) {
    try {
        const foundActivity = await Activity.findById(req.params.id)
        res.status(200).json(foundActivity)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Adds new Activity 
async function create(req, res) {
    try {
        const createdActivity = await Activity.create(req.body)
        res.status(200).json(createdActivity)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Update a Activity
async function update(req, res) {
    try {
        const updatedActivity = await Activity.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedActivity)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Deletes a Activity
async function remove(req, res) {
    try {
        const updatedActivity = await Activity.findByIdAndDelete(req.params.id)
        res.status(200).json(updatedActivity)
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