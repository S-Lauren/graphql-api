"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const productModel_1 = require("./models/productModel");
require('dotenv').config();
const app = express_1.default();
const port = process.env.PORT || 3000;
/* GraphQL Schema and Server */
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
/* Root Route */
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
/* Mongoose Connection */
const connectToMongoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default.connect(process.env.MONGO_URL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("Database connected!"))
        .catch(err => console.log(err));
    // Fetch all products
    const getProduct = yield productModel_1.ProductModel.find({});
    console.log(getProduct);
});
connectToMongoDB();
/* Connect to graphQL express server */
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
}));
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=server.js.map