import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    description: string;
    price: string;
    banner: string;
    category_id: string;
}

class CreateProductServices {
    async execute({ name, price, description, banner, category_id }: ProductRequest) {

        const product = await prismaClient.product.create({
            data: {
                nome: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id
            }
        })
        return product
    }
}

export default CreateProductServices