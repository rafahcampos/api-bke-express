import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll = async () => {
    const products = await prisma.user.findMany({
        select: {
            id: true,
            nome: true,
            preco: true,
            quantidade: true
        }
    })
    return products;
}

export const getProductoById = async (id) => {
    const product = await prisma.product.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            nome: true,
            preco: true,
            quantidade: true
        }
    })
    return product

}
