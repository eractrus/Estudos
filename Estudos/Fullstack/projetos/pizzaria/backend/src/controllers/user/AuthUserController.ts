import { Request, Response } from "express";
import AuthUserServices from "../../services/user/AuthUserServices";

class AuthUserController {
    async handle(req: Request, res: Response) {

        const { email, password } = req.body

        const data = await new AuthUserServices().execute({ email, password })

        return res.json(data)
    }
}

export default AuthUserController