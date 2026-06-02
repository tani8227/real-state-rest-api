import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(`${process.env.DATABASE_NAME}`, `${process.env.DATABASE_USERNAME}`, `${process.env.DATABASE_PASSWORD}`, {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

const DB = () => {
    sequelize.authenticate()
        .then(() => {
            console.log("successfully contected to db")
        })
        .catch(() => {
            console.log("error in connecting to db")
        })
}

export { DB, sequelize };