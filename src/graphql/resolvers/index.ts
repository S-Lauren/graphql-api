//import { ProductModel } from "../../models/productModel"

import { ProductModel } from "../../models/productModel";

// const Product = new ProductModel()

module.exports = {
  products: async () => {
    try {
      const productFetched = await ProductModel.find({})
      return productFetched;
    } catch (error) {
      throw error
    }
  },

  createProduct: async args => {
    try {
      const { name, image, score } = args.product
      const product = new ProductModel({
        name,
        score,
        image
      })
      const getProduct = await product.save();
      return getProduct;

    } catch (error) {
      throw error
    }
  },
}