import express,{ json,Router,Response,Request } from "express";
import { initDatabase } from "./database/db";
import { Parameters } from "./utils/constants";

import { userRouter } from "./modules/user";


const app = express();
app.use(express.json());

app.use("/user", userRouter)

app.get("/", (req: Request, res: Response) => {
    res.status(400).send({ hello: "world!!!" });
});


app.listen(3000, async() =>{
    const url = `mongodb://${Parameters.DATABASE_HOST}:${Parameters.DATABASE_PORT}/${Parameters.DATABASE_NAME}`;
    await initDatabase(url);
    console.log("Server running at port 8080");
})