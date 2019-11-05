
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
        .createTable('sales', function(sales){
            sales.increments()
            sales.boolean('sold').notNullable().defaultTo(1)
    
            sales
                .integer('car_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('cars')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars').dropTableIfExists('sales')
};
