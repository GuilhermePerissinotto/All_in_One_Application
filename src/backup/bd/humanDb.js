const {findAddressById} = require('../../graphql/db/addressDb');

let humans = [ { 
    id: "0",
    name: 'João Teste'
}]

// Query
function findById (id){
    const human = humans.find(human => human.id == id);
    return human
}

// Mutation
const addHuman = (data) => {
    const human = {
        id: data.id,
        name: data.name,
        age: data.age,
        address: findAddressById(data.address)
    }
    humans.push(human);
    return human;
}   

const removeHumanById = (id) => {
    const human = findById(id);
    humans.pop(human);
    return human;
}

const updateHuman = (args) => {
    const human = findById(args.id);
    if(human){
        //Da o update
        humans.pop(human.id);
        human.name = args.name;
        human.age = args.age;
        human.address = findAddressById(args.address);
        humans.push(human)
        return human;
    }
}

module.exports = {
    humans,
    findById,
    addHuman,
    removeHumanById,
    updateHuman
}