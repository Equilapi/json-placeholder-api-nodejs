const express = require('express')
const router = express.Router()
const Employed = require('../models/Employed')

router
    // Add employed.
    .post('/employed/add', async (req, res) => {
        const employed = new Employed(req.body)
        await employed.save()
        res.json({
            status: 'Employed added.'
        })
    })

    // See all employees.
    .get('/employees', async (req, res) => {
        const employees = await Employed.find()
        res.json(employees)
    })

    // Get employed data by ID.
    .get('/employed/:id', async (req, res) => {
        const employed = await Employed.findById(req.params.id);
        res.json(employed);
    })

    // Update employed.
    .put('/employed/:id', async (req, res) => {
        await Employed.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            status: 'Update Employed.'
        });
    })

    // Delete employed.
    .delete('/employed/:id', async (req, res) => {
        await Employed.findByIdAndRemove(req.params.id)
        res.json({
            status: 'Employed removed from the BD.'
        })
    })

module.exports = router