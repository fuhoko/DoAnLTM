
exports.up = function(knex) {
  return knex.schema
  .createTable('score', function (table) {
    table.increments('id').primary();
    table.integer('sbd');
    table.string('cum_thi', 255);
    table.string('toan', 255);
    table.string('van', 255).defaultTo(null);
    table.string('ngoai_ngu', 255).defaultTo(null);
    table.string('li', 255).defaultTo(null);
    table.string('hoa', 255).defaultTo(null);
    table.string('sinh', 255).defaultTo(null);
    table.string('KHTN', 255).defaultTo();
    table.string('su', 255).defaultTo();
    table.string('dia', 255).defaultTo();
    table.string('GDCD', 255).defaultTo();
    table.string('KHXH', 255).defaultTo();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("score");
};

