// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/wmp.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done); // turn on foreign key 
      }
    },
    testing: {
      client: 'sqlite3',
      connection: { filename: './database/test.db3' },
      useNullAsDefault: true,
      migrations: {
        directory: './database/migrations',
      },
      seeds: { directory: './database/seeds' },
    },
    staging: {
      client: 'sqlite3',
      connection: {
        filename: './data/staging.db3',
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },
  }
}
