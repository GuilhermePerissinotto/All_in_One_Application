const {addresses, findAddressById, addAddress, removeAddressById, updateAddress} = require('../../graphql/db/addressDb')
module.exports = {
    Query: {
        allAddress: () => addresses,
        address: (parent, {id}) =>  findAddressById(id)
    },
    Mutation: {
        addAddress: (parent, args) => addAddress(args),
        removeAddressById: (parent, {id}) => removeAddressById(id),
        updateAddress: (parent, args) => updateAddress(args)
    },
    Address: {
        id: (parent, args, context) => parent.id,
        number: (parent, args, context) => parent.number,
        street: (parent, args, context) => parent.street,
    }
}