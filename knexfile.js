module.exports = {
  development: {
    migrations: {
      directory: 'database/migrations',
      tableName: 'migrations',
    },
    client: 'mysql',
    connection: {
      host: 'sql12.freemysqlhosting.net',
      user: 'sql12383992',
      password: '9keUMTFUGp',
      database: 'sql12383992'
    },
    seeds: {
      directory: 'database/seeds'
    }
  },
  production: { client: 'mysql', connection: process.env.DATABASE_URL }
};
