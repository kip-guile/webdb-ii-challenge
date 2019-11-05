
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 'AWE132425', make: "Honda", model: "Blackbox", mileage: "1234.0", transmission_type: "Auto", status: "clean"},
        {VIN: '0PO876TG', make: "nissan", model: "comma", mileage: "40.2", transmission_type: "manual", status: "salvage"},
        {VIN: '5678HUGF', make: "rolls", model: "royce", mileage: "907.67", transmission_type: "auto", status: "clean"}
      ]);
    });
};
