module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  PORT: Number(process.env.DB_PORT),
  DB_NAME: process.env.DB_NAME,
  DIALECT: 'mysql'
};
