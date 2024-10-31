import { create, validateUserToCreate } from "../../models/userModel.js"
import {v4 as uuid} from 'uuid'
import bcrypt from 'bcrypt'
import {getByEmail, validateUserToLogin} from "../../models/userModel.js"
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from "../../config.js"


const login = async (req, res, next) => {
    try {

        const login = req.body;
        const loginValidated = validateUserToLogin(login)

        if (userValidated?.error) {
            return res.status(400).json({
                error: "Erro ao logar, verifique os dados!",
                fieldErrors: loginValidated.error.flatten().fieldErrors

            })
        }

        //buscar o user pelo email
        const user = await getByEmail(loginValidated.data.email)

        if (!user) {
            return res.status(400).json({
                error: "Email ou senha inválidos (email não encontrado)",
            })
        }

        //comparar a senha enviada com o hash armazenado
        const passIsValid = bcrypt.compareSync(loginValidated.data.pass, user.pass)
       
        if (!passIsValid) {
            return res.status(400).json({
                error: "Email ou senha inválidos (senha não confere)",
            })
        }

        const token = jwty.sign({name:user.name, publicId:user.public_id}, SECRET_KEY,{expiresIn: 60*5} )


        console.log(token);
        return res.json({token})
        

        if(!result){
            return res.status(500).json({
                error:"Erro ao criar usuário"
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
export default login;