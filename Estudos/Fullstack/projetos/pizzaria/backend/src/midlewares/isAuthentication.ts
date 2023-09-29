import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
    sub: string
}

export function isAuthentication(
    req: Request,
    res: Response,
    next: NextFunction) {

    //Receber o token e atribuir a uma variável
    const tokenAuth = req.headers.authorization
    //Validação se existe o Token
    !tokenAuth ? res?.status(401).end() : tokenAuth
    //Recortando apenas o token
    const [, token] = tokenAuth.split(" ")
    //Validar o Token

    try {
        const { sub } = verify(
            token,// toke recebido
            process.env.JWT_SECRET// variável de ambiente
        ) as PayLoad// Tipagem

        //Recupera o id do token e colaca dentro do req.user_id
        req.user_id = sub

        return next();//Se tudo deu certo, Segue o fluxo

    } catch (err) {//Tratamento de erro
        return res.status(401).end()
    }

}