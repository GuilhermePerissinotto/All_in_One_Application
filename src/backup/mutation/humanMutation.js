const humanMutation = `
    addHuman(id: ID!, name: String!, age: Int, address: ID!): Human
    removeHumanById(id: ID!): Human
    updateHuman(id: ID!, name: String, age: Int, address: ID!): Human
`

module.exports = {
    humanMutation
}