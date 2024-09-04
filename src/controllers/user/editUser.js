import { update } from "../../models/userModel.js";


const editUser = async (req, res) => {
    const { id } = req.params
    const user = req.body
    user.id = +id

    const result = await update(user)

    if (!result)
        return res.status(401).json({
            erro: "Erro ao editar o usuário"
        })

    return res.json({
        succes: "Usuário atualizaco com sucesso",
        user: result
    })
}

export default editUser;