import { Response, Request } from "express";
import ListOrderServices from "../../services/order/listOrderServices";

class ListOrderController {
    async handle(req: Request, res: Response) {
        const listOrder = await new ListOrderServices().execute()
        return res.json(listOrder)
    }
}

export default ListOrderController