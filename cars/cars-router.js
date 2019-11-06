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

router.get('/:id', validateCarId, (req, res) => {
    res.json(req.car)
});

router.post('/', (req, res) => {
    const newCar = req.body;
    Cars.insert(newCar)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(() => {
            res.status(500)
        })
})

router.put('/:id', validateCarId, (req, res) => {
    Cars.update(req.car.id, req.body)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(error => {
            res.status(500).json({message: 'Error updating car' + error.message})
        })
})

router.delete('/:id', validateCarId, (req, res) => {
    Cars.remove(req.car.id)
        .then(() => {
            res.status(200).json({message: 'car has been deleted'})
        })
        .catch(error => {
            res.status(500).json({message: 'Error deleting car' + error.message})
        })
});

function validateCarId(req, res, next) {
    const {id} = req.params;
    Cars.getById(id)
    .then(car => {
        if (car) {
            req.car = car;
            next()
        } else {
            res.status(400).json({message: 'invalid car ID'})
        }
    })
    .catch(error => {
        res.status(500).json({message: 'Something terrible happend while checking hub id: ' + error.message,})
    })
}

module.exports = router;