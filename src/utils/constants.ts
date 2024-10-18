import { config } from "dotenv";

config();

export class Parameters {
    // Metodo static es un metodo que puede ser accedido sin necesidad de instanciar la clase
    static readonly DATABASE_NAME = process.env?.DATABASE_NAME || "test";
    static readonly DATABASE_PORT = process.env?.DATABASE_PORT || "test";
    static readonly DATABASE_HOST = process.env?.DATABASE_HOST || "test";
}