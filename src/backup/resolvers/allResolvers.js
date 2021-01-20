const humanResolvers = require('../../graphql/resolvers/humanResolvers')
const addressResolvers = require('../../graphql/resolvers/addressResolver')

const resolvers = [
    humanResolvers,
    addressResolvers
]

module.exports = {
    resolvers
}