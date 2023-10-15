import { Request, Response } from "express";
import CreateOrederServices from "../../services/order/createOrderServices";

class CreateOrderController {
    async handle(req: Request, res: Response) {
        const { table, name } = req.body

        const createOrderServices = new CreateOrederServices()
        const order = await createOrderServices.execute({ table, name })

        return res.json(order)
    }
}

export default CreateOrderController