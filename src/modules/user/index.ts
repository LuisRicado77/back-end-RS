import express, {Router, Response, Request} from "express"
import { Types} from "mongoose";
import { createUser, getAllUsers, getUserById } from "./controller/user.controller";
import { schemaValidator } from "../../middleware/shema.middleware";
import { userSchemaCreate } from "./schemas/user.shema";





const userRouter = Router();

let users: any[] = [];

userRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const user = await getUserById(id);
    if(!user) {
        res.status(404).send({
            msg: "User not found"
        });
    } else {
        res.status(200).send(user);
    }
});

userRouter.post("/", schemaValidator(userSchemaCreate), async (req: Request, res: Response) => {
    try {
        console.log("Enter to route");
        const body = req.body; // Payload -> Carga util de la peticion
        const newUser = await createUser(body);
        res.status(201).send({ msg: "Creado con exito", user: newUser });
    } catch (error) {
        res.status(400).send({
            msg: "Error al crear el usuario"
        })
    }
});

userRouter.get("/", async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        res.status(200).send({
            users: users
        });
    } catch (error) {
        res.status(500).send({
            msg: "Error could get the users"
        });
    }
});

userRouter.patch("/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    const user = users.find(user => user.id === id);
    if(!user) {
        res.status(404).send({
            msg: "User not found"
        });
    } else {
        const body = req.body;
        users = users.map(item => {
            if(item.id === user.id) {
                return { ...user, ...body }; // Deestructuracion
            }
            return item;
        });
        res.status(200).send({ msg: "Actualizado con exito" });
    }
});

export {userRouter}


