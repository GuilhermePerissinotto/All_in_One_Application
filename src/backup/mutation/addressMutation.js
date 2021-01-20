const addressMutation = 
    `addAddress(id: ID!, number: Int!, street: String!): Address
    removeAddressById(id: ID!): Address
    updateAddress(id: ID!, number: Int!, street: String!): Address`


    module.exports = {
        addressMutation
    }