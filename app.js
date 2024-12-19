// Load environment variables
import dotenv from "dotenv";
dotenv.config();

import { connectToDatabase, sequelize } from "./config/dbConfig.js";
(async() => {
    try {
        await connectToDatabase();

        // Sync the models with the database (create tables if they don't exist)
        await sequelize.sync({ alter: true }); // Use { force: true } to drop and recreate tables
        console.log("Database synchronized.");
    } catch (error) {
        console.error("Error initializing the app:", error);
    }
})();

import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import session from "express-session";
import expressLayouts from "express-ejs-layouts";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));

// Get the directory of the current file (app.js)
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
import indexRoutes from "./routes/indexRoutes.js";
app.use('/', indexRoutes);

// Error Handlers (404, 500)
app.use((req, res, next) => {
    const locals = { title: "404 | Page Not Found" };
    return res.status(404).render("404", {
        locals,
        layout: "layout/errorLayout",
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    const locals = { title: "500 | Internal Server Error" };
    return res.status(500).render('internalError', {
        locals,
        layout: 'layout/errorLayout',
    });
});

// Server Setup
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;