
const knex = require('knex');

const knexfile = require('../knexfile');

const knexConfig = knexfile.development;

module.exports = knex(knexConfig);

/*
const knex = require('knex');

const config = require('../knexfile').development;

const db = knex(config);

module.exports = db;
*/
