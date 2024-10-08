import { update } from "../../models/productModel";

const editProduct = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  product.id = +id;

  const result = await update(product);

  if (!result)
    return res.status(401).json({
      erro: "Erro ao editar o produto",
    });

  return res.json({
    succes: "Produto atualizado com sucesso",
    product: result,
  });
};

export default editProduct;
