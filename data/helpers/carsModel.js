const db = require('../db-config');

module.exports = {
    read,
    insert,
    getById,
    update,
    remove
}

function getById(id) {
    return db('cars')
        .where({id})
        .first();
}


function read() {
    return db('cars');
}

function insert(car){
    return db('cars')
        .insert(car)
        .then(ids => {
           return getById(ids[0])
        })
}

function update(id, changes) {
    return db('cars')
        .where({id})
        .update(changes)
}

function remove(id) {
    return db('cars')
        .where('id', id)
        .del()
}