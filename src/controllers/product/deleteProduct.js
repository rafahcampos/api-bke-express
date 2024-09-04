import { remove } from "../../models/productModel";

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await remove(+id);

  if (!product)
    return res.status(404).json({
      error: "Produto não encontrado",
    });
  return res.json({
    message: "Produto removido com sucesso",
    product,
  });
};

export default deleteProduct;
