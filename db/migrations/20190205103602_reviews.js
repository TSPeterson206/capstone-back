exports.up = function (knex, Promise) {
  return knex.schema.createTable('reviews', table => {
    table.increments()
    table.string('content')
    table.integer('rating')
    table.integer('user_id').notNullable().defaultsTo(0).references('users.id').onDelete('CASCADE')
    table.integer('provider_id').notNullable().defaultsTo(0).references('providers.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('reviews')
}
