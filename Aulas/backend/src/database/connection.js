const knex = require('knex')
const configuration = require('../../knexfile')//configuração 

const connection = knex(configuration.development)

module.exports = connection;