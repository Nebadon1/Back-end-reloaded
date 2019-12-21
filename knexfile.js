// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dev.sqlite3'
    }, 
    useNullAsDefault: true,

    migrations: {
      directory: './data/migrations',
    },

    seeds: { directory: './data/seeds' },

    Pool:{
      afterCreate: function(connection, done){
        connection.run("PRAGMA foreign_keys = ON", done)
      }
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations',
    },

    seeds: { directory: './data/seeds' },

  }

};
