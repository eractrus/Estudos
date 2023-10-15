import { Request, Response } from "express";

import CreateCategorySevices from "../../services/category/createCategorySevices";

class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { name } = req.body
        const createCategorySevices = new CreateCategorySevices()
        const response = await createCategorySevices.execute(name)

        return res.json(response)
    }
}

export default CreateCategoryController