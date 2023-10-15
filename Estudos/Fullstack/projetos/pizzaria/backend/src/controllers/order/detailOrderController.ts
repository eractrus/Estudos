import { Request, Response } from "express";
import DetailOrderServices from "../../services/order/detailOrderServices";

class DetailOrderController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string

        const detailOrderServices = new DetailOrderServices()
        const detail = await detailOrderServices.execute({
            order_id
        })

        return res.json(detail)

    }
}

export default DetailOrderController