import express from "express";
import deleteProduct from "../controllers/product/deleteProduct.js";
import createProduct from "../controllers/product/createProduct.js";
import editPhotoProduct from "../controllers/product/editNameProduct.js";
import productList from "../controllers/product/productList.js";
import editProduct from "../controllers/product/editProduct.js";
import { ProductoById } from "../models/productModel.js";

const router = express.Router(); //criando o roteador

router.get('/list', productList);
router.get('/:id', ProductoById)
router.post('/', createProduct);
router.put('/', editProduct);
router.patch('/', editPhotoProduct);
router.delete('/', deleteProduct);

export default router;
