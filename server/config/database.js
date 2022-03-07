import Sequelize from 'sequelize';

const sequelize = new Sequelize({
    username: 'root',
    password: 'root',
    database: 'test',
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00",
    logging: true,
    dialectOptions: {
    decimalNumbers: true,
      timezone: "-03:00",
      typeCast: function (field, next) {
          if (field.type == 'DATETIME' || field.type == 'TIMESTAMP') {
              return new Date(field.string() + 'Z');
          }
          return next();
      },
  },
  });

  export default sequelize;