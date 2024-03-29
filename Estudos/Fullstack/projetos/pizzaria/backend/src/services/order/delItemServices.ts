import prismaClient from "../../prisma"

interface ItemRequest {
    item_id: string
}
class DelItemServices {
    async execute({ item_id }: ItemRequest) {
        const removeItem = await prismaClient.item.delete({
            where: {
                id: item_id
            }
        })

        return removeItem
    }
}

export default DelItemServices