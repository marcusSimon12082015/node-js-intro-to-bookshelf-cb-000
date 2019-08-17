// Update with your config settings.

module.exports = {

  testing: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'learnco_blog_test',
      user: 'Matija',
      password: 'Matija6'
    },
    pool: {
      min:2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    }
  },

  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'learnco_blog',
      user: 'Matija',
      password: 'Matija6'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    }
  },

};
