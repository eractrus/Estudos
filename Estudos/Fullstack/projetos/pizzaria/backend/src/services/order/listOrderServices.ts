import prismaClient from "../../prisma";

class ListOrderServices {
    async execute() {
        const listOrder = await prismaClient.order.findMany({
            where: {
                status: false,
                draft: false
            },
            orderBy: {
                created_at: "desc"
            }
        })

        return listOrder
    }
}

export default ListOrderServices