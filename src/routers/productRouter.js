import express from "express";
import deleteProduct from "../controllers/product/deleteProduct.js";
import createProduct from "../controllers/product/createProduct.js";
import editPhotoProduct from "../controllers/product/editPhotoProduct.js";
import listProducts from "../controllers/product/listProducts.js";
import editProduct from "../controllers/product/editProduct.js";

const router = express.Router(); //criando o roteador

router.get('/list', listProducts);
router.post('/', createProduct);
router.put('/', editProduct);
router.patch('/', editPhotoProduct);
router.delete('/', deleteProduct);

export default router;
