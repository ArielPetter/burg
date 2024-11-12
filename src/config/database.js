const { underscoredIf } = require('sequelize/lib/utils');

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5431',
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
