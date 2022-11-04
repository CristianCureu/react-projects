const ShortcutModel = require('../Models/Shortcut')
const ObjectId = require('mongodb').ObjectId

const list = async (req, res) => {
    try {
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            return res.status(400).json({
                success: false,
                message: 'No data send'
            })
        }
        const data = await ShortcutModel.find()
        const count = await ShortcutModel.find().count()
        res.status(200).json({ succes: true, data, count })
    } catch (err) {
        res.status(400).json({ success: false, message: err.message })
    }
}

const listById = async (req, res) => {
    try {
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            return res.status(400).json({
                success: false,
                message: 'No data send'
            })
        }
        const data = await ShortcutModel.findById(req.params.id)
        res.status(200).json({ succes: true, data })
    } catch(err) {
        res.status(400).json({ success: false, message: err.message })
    }
}

const create = async (req, res) => {
    try {
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            return res.status(400).json({
                success: false,
                message: 'No data send'
            })
        }
        const data = await ShortcutModel.create(req.body)
        res.status(200).json({ succes: true, data })
    } catch (err) {
        res.status(400).json({ success: false, message: err.message })
    }
}

const edit = async (req, res) => {
    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: 'The Id is invalid'
            })
        }
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            return res.status(400).json({
                success: false,
                message: 'No data send'
            })
        }
        const shortcut = await ShortcutModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).json({ succes: true, data: shortcut })
    } catch (err) {
        res.status(400).json({ success: false, message: err.message })
    }
}

module.exports = {
    list,
    listById,
    create,
    edit
}