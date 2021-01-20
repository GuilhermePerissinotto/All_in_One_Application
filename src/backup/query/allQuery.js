const { humanQuery } = require('./humanQuery')
const { addressQuery } = require('./addressQuery')

const Query = `
    type Query {
    ${humanQuery}
    ${addressQuery}
    }
`

module.exports = {
    Query
}