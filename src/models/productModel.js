import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const getAll = async () => {
   const users = await prisma.user.findMany({
    select: {
        id:true,
        name:true,
        email:true,
        pass:false
    }
   })
}

const create = () => {

}

export {getAll ,create};