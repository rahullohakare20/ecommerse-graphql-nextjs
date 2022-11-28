const graphql = require('graphql');
const data = require('./data');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        brand: { type: GraphQLString },
        imageList: { type: new graphql.GraphQLList(GraphQLString) },
        price: { type: GraphQLString }
    })
});

const ProductsType = new GraphQLObjectType({
    name: "Products",
    fields: () => ({
        getAllProducts: {
            type: new graphql.GraphQLList(ProductType),
            resolve(parent, args) {
                return data;
            }
        },

    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        Products: {
            type: ProductsType,
            resolve(parent, args) {
                return data;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})