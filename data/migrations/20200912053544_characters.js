exports.up = async function (knex) {
  await knex.schema.createTable('characters', tbl => {
    tbl.increments();
    tbl.text('name').notNull().unique();
    tbl.text('description').notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('characters');
};
