import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig.js";

const Url = sequelize.define("Url", {
    id : {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    originalUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    shortenedUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    expiresAt: {
        type: DataTypes.DATE,
    },
},
{
    tableName: "urls",
    timestamps: false,
    indexes: [
        { fields: ["originalUrl"] },
        { fields: ["shortenedUrl"] },
    ],
});

export default Url;