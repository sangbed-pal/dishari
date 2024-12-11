import express from "express";
import "dotenv/config";
import connectWithDatabase from "./db/connection.js";
import authRouter from "./routes/auth.route.js";
import organizationRouter from "./routes/organization.route.js";
import problemRouter from "./routes/problem.route.js";

await connectWithDatabase();

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/organization", organizationRouter);
app.use("/api/v1/problems", problemRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`);
});