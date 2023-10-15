import { Request, Response } from "express";
import RemoveOrderServices from "../../services/order/removeOrderServices";

class RemoveOrderController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string

        const removeOrderServices = new RemoveOrderServices()
        const order = await removeOrderServices.execute({ order_id })

        return res.json(order)
    }
}

export default RemoveOrderController