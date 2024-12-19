// Load environment variables
import dotenv from "dotenv";
dotenv.config();

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false,
});

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("PostgreSQL connected successfully.");
    } catch (error) {
        console.error(`PostgreSQL connection error: ${error.message}`);
        process.exit(1);
    }
};

export {
    sequelize,
    connectToDatabase,
};