exports.up = function (knex, Promise) {
  return knex.schema.createTable('providers', table => {
    table.increments()
    table.string('companyname').notNullable().defaultsTo('')
    table.text('providerbio').notNullable().defaultsTo('')
    table.string('services').notNullable().defaultsTo('')
    table.text('address')
    table.string('avgrating')
    table.string('phone')
    table.text('businessphoto')
    table.integer('typeID').notNullable().defaultsTo(0).references('type.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('providers')
}
