import { create, validateUserToCreate } from "../../models/userModel.js"
import {v4 as uuid} from 'uuid'
import bcrypt from 'bcrypt'



const logout = async (req, res, next) => {
    try {

        const user = req.body;
        const userValidated = validateUserToCreate(user)

        if (userValidated?.error) {

            return res.status(400).json({
                error: "Erro ao criar usuário, verifique os dados!",
                fieldErrors: userValidated.error.flatten().fieldErrors

            })
        }

        //incluindo um novo elemento
        userValidated.data.public_id = uuid()
        userValidated.data.pass = bcrypt.hashSync( userValidated.data.pass, 10)

        const result = await create(userValidated.data)

        return res.json({
            sucess: "Usuário criado com sucesso ",
            user: result
        })
    } catch (error) {
        console.log(error);
        if (error?.code === 'P2002') {
            return res.satatus(400).json({
                error: "Email já cadastrado",
                fieldErrors: {email:['Email já cadastrado']}
            })
        }
        next(error)
    }
}
export default logout;