# **GraphQL API 💚** #

***Configuration for make graphql api
connect to MongoDB.***

- TypeScript 
- GraphQL <3
- Node & Express
- Mongoose / Mongo 🪴

**What I have to remember for host to Heroku 🚀**

- Add config vars (MONGO_URL_STRING)
- Add PORT
- Add build script as "tsc" if using Typescript
- Add ProcFile | web: node + path to the server.js
- Do not forget to untrack dist folder from .gitignore when
push master to heroku

**Why?**

The problem was with my React Native mobile app, named "Kayu". 
A project on app for scan bar code product and see
the composition with the help of OpenFoodFactsAPI. 

When I used the physical device for scan a product, the ApolloServer on localhost:4000 didn't work as expected. 
Even with local IP address, I couldn't querying my GraphQL app.
And I felt on "Network Request Failed" error everytime.

*it works with simulator, but for scan a barcode, I needed a physical device for send the mutation of adding product*
