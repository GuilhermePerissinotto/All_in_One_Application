export const addressSchema = `
    type Address {
        id: ID!
        number: Int!
        street: String!
    }

    extend type Query {
        allAddress: [Address!]!
        address(id: ID!) : Address
    }
    
    extend type Mutation { 
        addAddress(number: Int!, street: String!): Address
        removeAddressById(id: ID!): Address
        updateAddress(id: ID!, number: Int!, street: String!): Address
    }
`;