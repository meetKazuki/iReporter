import { config } from 'dotenv';

config();

const { DB_DEV, DB_USER, DB_PASSWORD } = process.env;
const dialect = 'postgres';

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DEV,
    host: '127.0.0.1',
    port: process.env.DB_PORT,
    dialect,
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: process.env.DB_TEST,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: false,
    dialect,
  },
  production: {
    username: process.env.PRODUCTION_USERNAME,
    password: process.env.PRODUCTION_PASSWORD,
    database: process.env.PRODUCTION_DATABASE,
    host: process.env.PRODUCTION_HOST,
    port: process.env.PRODUCTION_PORT,
    logging: false,
    dialect,
    ssl: true,
  },
};
