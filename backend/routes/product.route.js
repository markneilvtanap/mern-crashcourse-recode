import express from "express";

import {
  createProduct,
  deleteProduct,
  getProducts,
  updatedProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

//? getting all the product
router.get("/", getProducts);

//? creating a product
router.post("/", createProduct);

//? updating a product
router.put("/:id", updatedProduct);

//? deleting a product
router.delete("/:id", deleteProduct);

export default router;
