import { getAllAddresses, getAddressById, addAddress, removeAddressById, updateAddress } from '../db/addressDb'
export const addressResolver = {
    Query: {
        allAddress: () => getAllAddresses(),
        address: (parent, {id}) =>  getAddressById(id)
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