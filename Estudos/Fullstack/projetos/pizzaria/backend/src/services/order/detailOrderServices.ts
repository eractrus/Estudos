import prismaClient from "../../prisma";

interface DetailRequest {
    order_id: string
}
class DetailOrderServices {
    async execute({ order_id }: DetailRequest) {
        const detailOrder = await prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                product: true,
                order: true
            }
        })

        return detailOrder
    }
}

export default DetailOrderServices