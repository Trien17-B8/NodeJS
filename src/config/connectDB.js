const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("NodeJS", "sa", "trien123", {
  host: "localhost",
  dialect: "mssql",
});

let connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connection;
