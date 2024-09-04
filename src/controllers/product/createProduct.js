import { create } from "../../models/productModel";

const createProduct = async (req, res) => {
    const product = req.body;

    const result = await create(product);

    if(!result)
        return res.status(500).json({
            error:"Erro ao criar produto"
    })

    return res.json({
        sucess:"Produto criado com sucesso",
        product:result
    })
}

export default createProduct;