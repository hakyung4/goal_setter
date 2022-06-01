const asyncHandler = require('express-async-handler')

// @description Get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler((req, res) => {
    res.status(200).json({ message: 'Get goals' })
})

// @description Set Goals
// @route POST /api/goals
// @access Private
const setGoals = asyncHandler((req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Set goals' })
})

// @description Update Goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = asyncHandler((req, res) => {
    res.status(200).json({ message: `Update goals ${req.params.id}` })
})

// @description Delete Goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoals = asyncHandler((req, res) => {
    res.status(200).json({ message: `Delete goals ${req.params.id}` })
})



module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}