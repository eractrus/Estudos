import { Request, Response } from "express";
import AddItemServices from "../../services/order/addItemServices";

class AddItemController {
    async handle(req: Request, res: Response) {
        const { product_id, order_id, amount } = req.body

        const addItemServices = new AddItemServices()
        const order = await addItemServices.execute(
            { product_id, order_id, amount }
        )

        return res.json(order)
    }
}

export default AddItemController