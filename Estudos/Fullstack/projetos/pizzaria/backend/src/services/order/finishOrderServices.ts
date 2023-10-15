import prismaClient from "../../prisma";

interface FinishRequest {
    order_id: string
}

class FinishOrderServices {
    async execute({ order_id }: FinishRequest) {

        const order = await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                status: true
            }
        })

        return order
    }
}

export default FinishOrderServices