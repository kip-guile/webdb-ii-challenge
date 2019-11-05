const express = require('express')
const Cars = require('../data/helpers/carsModel')

const router = express.Router();

router.get('/', (req, res) => {
    Cars.read()
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(() => {
            res.status(500)
        })
})

module.exports = router;