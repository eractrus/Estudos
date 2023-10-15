import { Request, Response } from "express";
import DelItemServices from "../../services/order/delItemServices";

class DelItemController {
    async handle(req: Request, res: Response) {
        const item_id = req.query.item_id as string

        const delItem = new DelItemServices()
        const item = await delItem.execute({
            item_id
        })

        return res.json(item)
    }
}

export default DelItemController