import { remove } from "../../models/userModel.js";

const deleteUser = async (req, res,next) => {
    const { id } = req.params
    try {
        const user = await remove(+id)
        return res.json({
            message: "User removido com sucesso",
            user
        })
    } catch (error) {
        console.log(error);
        if (error?.code === 'P2025')
            return res.status(404).json({
                error: "Usuário não encontrado",
            })
    next(error)
    }
}
export default deleteUser;

//Programação never nesting

