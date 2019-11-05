
exports.up = function(knex) {
    return knex.schema
        .createTable('cars', function(cars) {
            cars.increments('id')
            cars
                .string('VIN')
                .notNullable()
                .unique()
            cars
                .text('make')
                .notNullable()
            cars
                .string('model')
                .notNullable()
            cars
                .decimal('mileage')
                .notNullable()
            cars
                .string('transmission_type')
            cars
                .string('status')
        })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
