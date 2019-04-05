exports.up = function (knex, Promise) {
  return knex.schema.createTable('type', table => {
    table.increments()
    table.string('description')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('type')
}
