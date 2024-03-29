import { Request, Response } from 'express'
import DetailUserService from '../../services/user/DetailUserServices'

class DetailUserController {
    async handle(req: Request, res: Response) {

        const { user_id } = req


        const detailUserService = new DetailUserService()

        const user = await detailUserService.execute(user_id)

        return res.json(user)
    }
}

export default DetailUserController