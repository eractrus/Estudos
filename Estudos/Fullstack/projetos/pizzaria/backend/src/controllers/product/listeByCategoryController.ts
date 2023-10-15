import { Request, Response } from "express";
import ListeByCategorySevices from "../../services/product/listeByCategorySevices";

class ListeByCategoryController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string
        const listeByCategory = new ListeByCategorySevices()
        const products = await listeByCategory.execute({ category_id })

        console.log(products)

        return res.json(products)
    }
}

export default ListeByCategoryController