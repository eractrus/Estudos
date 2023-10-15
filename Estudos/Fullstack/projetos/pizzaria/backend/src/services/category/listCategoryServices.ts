import prismaClient from "../../prisma";

class listCategoryServices {
    async execute() {

        const category = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true
            }
        })
        return category
    }
}

export default listCategoryServices