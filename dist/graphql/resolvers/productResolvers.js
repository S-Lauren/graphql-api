"use strict";
//import { ProductModel } from "../../models/productModel"
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = require("../../models/productModel");
// const Product = new ProductModel()
module.exports = {
    products: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const productFetched = yield productModel_1.ProductModel.find({});
            return productFetched;
        }
        catch (error) {
            throw error;
        }
    }),
    createProduct: (args) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name } = args.article;
            const product = new productModel_1.ProductModel({
                name,
            });
            const newProduct = yield product.save();
            return Object.assign(Object.assign({}, newProduct), { _id: newProduct.id });
        }
        catch (error) {
            throw error;
        }
    }),
};
//# sourceMappingURL=productResolvers.js.map