import { Request, Response } from 'express'
import { CreateUserServices } from '../../services/user/CreateUserServices'

class CreatUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body
        const user = await new CreateUserServices().execute({ name, email, password })
        return res.json(user)
    }
}

export default CreatUserController 