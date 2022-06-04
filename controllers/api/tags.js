const Tag = require('../../models/Tag')

// Finds all tags
async function index(req, res) {
    try {
        const tags = await Tag.find({}).populate('activities').exec()
        res.status(200).json(tags)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Adds new tag 
async function create(req, res) {
    try {
        const createdTag = await Tag.create(req.body)
        res.status(200).json(createdTag)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Update a tag
async function update(req, res) {
    try {
        const updatedTag = await Tag.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedTag)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Deletes a tag
async function remove(req, res) {
    try {
        const deletedTrip = await Tag.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedTag)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

module.exports = {
    index,
    create,
    update,
    remove
}