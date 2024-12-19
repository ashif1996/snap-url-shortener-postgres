import express from "express";
import session from "express-session";
import expressLayouts from "express-ejs-layouts";

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello world!")
});

// Server Setup
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;