//import {getAll} from "../../models/productModel.js";

const listProducts = async (req, res) => {
    //const products = await getAll();
    const products = [];
    res.json(products);
};

export default listProducts;