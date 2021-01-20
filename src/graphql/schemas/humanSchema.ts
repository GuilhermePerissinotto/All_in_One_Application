export const humanSchema = `

type Human {
    id: ID!
    name: String!
    age: Int
    address: Address
}

type Query {
    allHuman: [Human!]!
    human(id: ID!) : Human
}

type Mutation {
    addHuman(name: String!, age: Int, address: ID): Human
    removeHumanById(id: ID!): Human
    updateHuman(id: ID!, name: String, age: Int, address: ID): Human
}
`;