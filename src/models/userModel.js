import { PrismaClient } from "@prisma/client";
import { z } from 'zod';


export const prisma = new PrismaClient();

const userSchema = z.object({
    id: z.number({
        required_error: "O ID dever ser um número inteiro",
        invalid_type_error:"O ID dever ser um número positivo"
    }).positive(),

    name: z.string({
        required_error: "O nome deve ter no mínimo 3 caracteres",
        invalid_type_error:"O nome deve ter no máximo 100 caracteres"
    }).min(3)
    .max(100),

    email: z.string({
        required_error:"O email deve ser uma string",
        invalid_type_error:"email inválido"
    })
    .email()
    .max(200, "O nome deve ter no máximo 200 caracteres"),
    pass: z.string({
        message: "A senha deve ser uma string",
        invalid_type_error: ""
    }).min(6, {
        message: "A senha deve ter no mínimo 6 caracteres"
    }).max(256, {
        message: "A senha deve ter no máximo 256 caracteres"
    })
})

export const validateUser = (user) => {
    return userSchema, safeParse(user)
}

//ID fica opcional quando se usa o partial
export const validateUserToCreate = (user) => {
    const partialUserSchema = userSchema.partial({
        id: true
    })
    return schemaUserSchema.safeParse(user)
}


export const getAll = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,

        }
    })

    return users;
}

export const getById = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email: true,

        }
    })
    return user
}

export const create = async (user) => {
    const result = await prisma.user.create({
        data: user,
        select: {
            id: true,
            name: true,
            email: true,
        }
    })
    return result
}

export const remove = async (id) => {
    const result = await prisma.user.delete({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email: true,
        }
    })
    return result
}
export const update = async (user) => {
    const result = await prisma.user.update({
        where: {
            id: user.id,
        },
        data: user,
        select: {
            id: true,
            name: true,
            email: true,
        }
    })
    return result
}
