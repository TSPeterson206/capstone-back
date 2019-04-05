exports.up = function (knex, Promise) {
  return knex.schema.createTable('favorites', table => {
    table.increments()
    table.integer('user_id').notNullable().defaultsTo(0).references('users.id').onDelete('CASCADE')
    table.integer('provider_id').notNullable().defaultsTo(0).references('providers.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('favorites')
}
