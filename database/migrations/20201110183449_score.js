
exports.up = function(knex) {
  return knex.schema
  .createTable('score', function (table) {
    table.increments('id').primary();
    table.integer('sbd');
    table.string('cum_thi', 255);
    table.string('toan', 255);
    table.string('van', 255);
    table.string('ngoai_ngu', 255);
    table.string('li', 255);
    table.string('hoa', 255);
    table.string('sinh', 255);
    table.string('KHTN', 255);
    table.string('su', 255);
    table.string('dia', 255);
    table.string('GDCD', 255);
    table.string('KHXH', 255);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at');
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("score");
};

