const {humans, findById, addHuman, removeHumanById, updateHuman} = require('../../graphql/db/humanDb')
module.exports = {
    Query: {
        allHuman: () => humans,
        human: (parent, {id}) =>  findById(id)
    },
    Mutation: {
        addHuman: (parent, args) => addHuman(args),
        removeHumanById: (parent, {id}) => removeHumanById(id),
        updateHuman: (parent, args) => updateHuman(args)
    },
    Human: {
        id: (parent, args, context) => parent.id,
        name: (parent, args, context) => parent.name,
        age: (parent, args, context) => parent.age,
        address: (parent, args, context) => parent.address,
    }
}