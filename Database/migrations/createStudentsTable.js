exports.up = function(knex) {
  return knex.schema.createTable('students', function(table) {
    table.increments('id').primary();
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
    table.date('date_of_birth').notNullable();
    table.string('email', 255).unique().notNullable();
    table.string('password', 255).notNullable(); // Assuming authentication is needed
    table.timestamps(true, true); // Adds created_at and updated_at columns
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('students');
};