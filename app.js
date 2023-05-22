const express = require("express");
const app = express();
const connectDB = require("./config/database");
const projectRoutes = require("./src/routes/projects");

require("dotenv").config({ path: "./config/.env" });

connectDB();

// app.use(cors());

app.use(express.json());

app.use("/projects", projectRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server is running!");
});