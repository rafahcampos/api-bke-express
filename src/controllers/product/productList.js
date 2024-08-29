import {getAll} from "../../models/productModel.js";

const productList = async (req, res) => {
    const products = await getAll();
    res.json(products);
};

export default productList;