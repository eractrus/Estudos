import prismaClient from "../../prisma";

class CreateCategorySevices {
    async execute(name: string) {

        if (!name || name === "") {
            throw new Error("Insira o nome da categoria");
        }

        const category = prismaClient.category.create({
            data: {
                name: name
            }
        })

        return category
    }
}

export default CreateCategorySevices