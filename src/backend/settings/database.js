const Sequelize = require("sequelize");

//conexiona la bd
module.exports = new Sequelize('bienes_raices', 'root', '', {
  host: '127.0.0.1',
  dialect: "mysql",
  port: 3306,
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
