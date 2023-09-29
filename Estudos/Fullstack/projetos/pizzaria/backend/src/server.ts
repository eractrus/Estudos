//Importações
import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors'
import cors from "cors"
import { router } from "./routes";

// Instâncias
const server = express()
server.use(express.json())
server.use(cors())

//Rotas
server.use(router)

//Midleware de tratamento de erros: todas as rotas passaram por uma verificação de erro 
server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    //Se houver um erro 400
    if (err instanceof Error) {
        return res.status(400).json({ error: err.message })
    }
    //se houver um erro 500
    return res.status(500).json({ status: 'error', mensage: 'Interval server  error' })
})

//Porta do servidor
server.listen(3333, () => console.log({ mesnsagem: 'Run Server' }))