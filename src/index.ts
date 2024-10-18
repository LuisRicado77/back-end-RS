import express,{ json,Router,Response,Request } from "express";
import { initDatabase } from "./database/db";
import { Parameters } from "./utils/constants";
import { expression } from "joi";


const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.status(400).send({ hello: "world!!!" });
});


app.listen(3000, () =>{
    console.log("Server running at port 8080");
})