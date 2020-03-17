const knex = require('knex');
// object: original
/*
const knexConfig = knex({
  client: 'sqlite3', //db driver
  connection: {
    filename: './data/produce.db3' // connection could be an object or a string
  },
  useNullAsDefault: true // only needed for sqlite
});
*/

// configured a connection to the database
const knexConfig = {
  client: 'sqlite3', //db driver
  connection: {
    filename: './data/produce.db3' // connection could be an object or a string
  },
  useNullAsDefault: true // only needed for sqlite
};

// db represents a live connection to the database
// const db = knex(knexConfig);

module.exports = knex(knexConfig);
