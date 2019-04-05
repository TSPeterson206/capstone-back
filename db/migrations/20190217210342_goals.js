exports.up = function (knex, Promise) {
  return knex.schema.createTable('goals', table => {
    table.increments()
    table.integer('user_id').references('users.id').onDelete('CASCADE')
    table.text('goal').notNullable().defaultsTo('')
    table.text('enddate').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('goals')
}
