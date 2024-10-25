import Joi from "joi";

const name = Joi.string();
const lastName = Joi.string();
const age = Joi.number();
const password = Joi.string();
const email = Joi.string().email();

// DRY -> Don't repeat yourself

// Necesito que vengan todos los atributos
export const userSchemaCreate = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    age: age.required(),
    email: email.required(),
    password:password.required()
});

// No los necesito todos
export const userSchemaUpdate = Joi.object({
    name: name,
    lastName: lastName,
    age: age,
    email: email,
    password: password
});