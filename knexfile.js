module.exports = {
  development: {
    migrations: {
      directory: 'database/migrations',
      tableName: 'migrations',
    },
    client: 'mysql',
    connection: { user: 'root', database: 'my_data' },
    seeds: {
      directory: 'database/seeds'
    }
  },
  production: { client: 'mysql', connection: process.env.DATABASE_URL }
};
