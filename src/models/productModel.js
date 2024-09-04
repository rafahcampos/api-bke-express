import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll = async () => {
  const products = await prisma.user.findMany({
    select: {
      id: true,
      nome: true,
      preco: true,
      quantidade: true,
    },
  });
  return products;
};

export const getProductoById = async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      nome: true,
      preco: true,
      quantidade: true,
    },
  });
  return product;
};

export const create = async (product) => {
  const result = await prisma.product.create({
    data: product,
    select: {
      id: true,
      nome: true,
      preco: true,
      quantidade: true,
    },
  });
  return result;
};

export const remove = async (id) => {
  const result = await prisma.product.delete({
    where: {
      id,
    },
    select: {
      id: true,
      nome: true,
      preco: true,
      quantidade: true,
    },
  });
  return result;
};
 
export const update = async (product) => {
  const result = await prisma.product.update({
    where: {
      id: product.id,
    },
    data: product,
    select: {
      id: true,
      nome: true,
      preco: true,
      quantidade: true,
    },
  });
  return result;
};
