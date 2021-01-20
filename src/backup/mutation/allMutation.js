const { humanMutation } = require('./humanMutation')
const { addressMutation } = require('./addressMutation')

const Mutation = `
    type Mutation {
    ${humanMutation}
    ${addressMutation}
    }
`


module.exports = {
    Mutation
}