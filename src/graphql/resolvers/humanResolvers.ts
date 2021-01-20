import {getAllHumans, findHumanById, addHuman, removeHumanById, updateHuman} from '../db/humanDb';
export const humanResolvers = {
    Query: {
        allHuman: () => getAllHumans(),
        human: (parent, {id}) =>  findHumanById(id)
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