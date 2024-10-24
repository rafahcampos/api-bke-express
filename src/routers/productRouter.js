import express from "express";
import deleteProduct from "../controllers/product/deleteProduct.js";
import createProduct from "../controllers/product/createProduct.js";
import editPhotoProduct from "../controllers/product/editNameProduct.js";
import productList from "../controllers/product/productList.js";
import editProduct from "../controllers/product/editProduct.js";
import productById from "../controllers/product/productById.js"

const router = express.Router(); //criando o roteador

router.get('/list', productList);
router.get('/:id', productById)
router.post('/', createProduct);
router.put('/', editProduct);
router.patch('/', editPhotoProduct);
router.delete('/', deleteProduct);

export default router;
