const db = require('../db-config');

module.exports = {
    read,
    insert,
}


function read() {
    return db('cars');
}

function insert(car){
    return db('cars')
        .insert(car)
        .then(ids => {
            console.log(ids);
        })
}