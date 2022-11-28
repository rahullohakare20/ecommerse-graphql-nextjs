
const cors = require('cors');

const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema");
const express = require("express");
const app = express();

app.use(express.json());

app.use(cors());
// app.use("/", (req, res) => {
//     res.send("Server loaded ")
// });

app.use("/api/graphql/products", graphqlHTTP({
    schema,
    graphiql: true
}));



app.listen(4000, function () {
    console.log("Server started on port 4000");
});