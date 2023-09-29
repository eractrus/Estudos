// Importações
import prismaClient from "../../prisma"
import { hash } from 'bcryptjs'

interface UserRequest {
    name: string
    email: string
    password: string
}

//objeto
class CreateUserServices {
    // Recebe dados do controller
    async execute({ name, email, password }: UserRequest) {

        //Verificar se foi passado um email

        if (!email) {
            throw new Error("Email é obrigatório")
        }

        // Verificar se ja existe o email informado cadastrado no banco de dados 

        const verificarEmail = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        // Se ja existir retorna uma mensagem
        if (verificarEmail) {
            throw new Error("Email ja existe")
        }

        //se não existir

        const passwordHash = await hash(password, 8)//Criptografa a senha e atribui ela a variável "passwordHash"

        //envia os dados ao banco de dadps 
        const user = prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
            },
            //Retorna apenas os valores
            select: {
                id: true,
                name: true,
                email: true,
            }
        })

        return user //retorno
    }
}

export { CreateUserServices }