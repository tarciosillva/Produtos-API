
const knex = require("../connection")

exports.up = knex => knex.schema.createTable ('Produto', table => {
    table.increments('id')

    table.text('category').notNullable()
    table.text('product_Name').notNullable()
    table.float('value', 5,2).notNullable()
    table.text('imageURL').notNullable()
})

exports.down = kenex => knex.schema.dropTable('Produto')