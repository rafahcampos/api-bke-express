import { update } from "../../models/productModel";

const editNameProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const product = { id: +id, name };
  const result = await update(product);

  if (!result)
    return res.status(401).json({
      erro: "Erro ao criar usuário",
    });

  return res.json({
    succes: "Nome atualizado com sucesso",
    product: result,
  });
};

export default editNameProduct;
