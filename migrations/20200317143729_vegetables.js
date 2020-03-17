
exports.up = function(knex) {
  return knex.schema.createTable('vegetables', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable().unique().index();
    tbl.boolean('favorite').defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('vegetables');
};
