// const {Type} = require('./type/allType');
// const {Query} = require('./query/allQuery')
// const {Mutation} = require('./mutation/allMutation')
const addressSchema = require('../graphql/schemas/addressSchema')
const humanSchema = require('../graphql/schemas/humanSchema')
// const typeDefs = `
//     ${Query}
//     ${Mutation}
//     ${Type}
// `

const typeDefs = [
    addressSchema, humanSchema
]
module.exports = {
    typeDefs
}