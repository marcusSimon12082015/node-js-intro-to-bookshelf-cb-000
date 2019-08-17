// Update with your config settings.

module.exports = {

  testing: {
    client: 'pg',
    connection:{
      database: 'learnco_blog_test',
      port: '',
      ssl:false,
      host: "127.0.0.1",
      user: 'Matija',
      password: 'Matija6'
    },
    pool: {
      min:0,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    }
  },

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/learnco_blog_test',
    /*
    connection: {
      host: 'localhost',
      database: 'learnco_blog',
      user: 'Matija',
      password: 'Matija6'
    },
    */
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
