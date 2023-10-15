import { Request, Response } from "express";
import CreateProductServices from "../../services/product/createProductServices";

class CreateProductContoller {
    async handle(req: Request, res: Response) {
        
        const { name, price, description, category_id } = req.body

        const createProductServices = new CreateProductServices()

        if (!req.file) {
            throw new Error('É necessário eviar uma imagem')
        } else {

            const { originalname, filename: banner } = req.file


            const product = await createProductServices.execute({
                name,
                price,
                description,
                banner,
                category_id
            })

            return res.json(product)
        }
    }
}

export default CreateProductContoller