import prismaClient from "../../prisma";

interface ItemRequest {
    product_id: string,
    order_id: string,
    amount: number
}

class AddItemServices {
    async execute({ product_id, order_id, amount }: ItemRequest) {

        const order = await prismaClient.item.create({
            data: {
                product_id: product_id,
                order_id: order_id,
                amount: amount
            }
        })
        return order
    }
}

export default AddItemServices