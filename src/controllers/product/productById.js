import { getById } from "../../models/productModel";

const productById = async (req, res) => {
  const { id } = req.params;

  const product = await getById(+id);

  if (product)
    return res.json({
      message: "Product get by id",
      product,
    });
  else
    return res.status(404).json({
      error: "Product não encontrado",
    });
};

export default productById;
