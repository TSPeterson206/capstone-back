exports.up = function(knex, Promise) {
  return knex.schema.createTable('goals', table => {
      table.increments();
      table.integer('user_id').references('users.id').onDelete('CASCADE')
      table.text('goal').notNullable().defaultsTo('');
      table.timestamps(true, true);
  })
  // .then(t => {
  //   return knex.schema.raw(
  //     `ALTER TABLE "goals"
  //     ADD CONSTRAINT "goals_unique" UNIQUE(user_id)`
  //   )
  // })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('goals')
};