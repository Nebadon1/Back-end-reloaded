require('dotenv').config();

const knex = require("knex");

const knexConfig = require("../knexfile.js");

const dbEnv = process.env.ENVIRONMENT || 'development'
                        
module.exports = knex(knexConfig[ dbEnv ]);
