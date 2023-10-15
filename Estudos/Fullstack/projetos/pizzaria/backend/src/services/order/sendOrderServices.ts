import prismaClient from "../../prisma"; 0

interface OrderRequest {
    order_id: string
}
class SendOrderServices {
    async execute({ order_id }: OrderRequest) {
        const send = await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                draft: false
            }
        })
        return send
    }
}

export default SendOrderServices