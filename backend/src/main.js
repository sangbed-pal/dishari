import express from "express";
import cookieParser from "cookie-parser"
import "dotenv/config";
import connectWithDatabase from "./db/connection.js";
import userRouter from "./routes/user.route.js";
import tokenRouter from "./routes/token.route.js";
import profileRouter from "./routes/profile.route.js";
import problemRouter from "./routes/problem.route.js";

await connectWithDatabase();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.get('/test',(req,res)=>
{
    res.json('Hello world');
})
app.use("/api/v1/user", userRouter);
app.use("/api/v1/token", tokenRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/problems", problemRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`);
});