import { Request, Response } from "express";
import FinishOrderServices from "../../services/order/finishOrderServices";

class FinishOrderController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string

        const finishOrderServer = new FinishOrderServices()
        const order = await finishOrderServer.execute({
            order_id
        })

        return res.json(order)
    }
}

export default FinishOrderController