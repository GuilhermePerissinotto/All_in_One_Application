import { getRepository } from "typeorm";
import { Human } from "../../bd/entity/Human";
import { getAddressById } from "./addressDb";

const getHumans = async() => {
    return await getRepository(Human);
}

// Query

const getAllHumans = async() => {
    const humans = await getHumans();
    console.log(await humans.find());
    return await humans.find();
}

const findHumanById = async(id) => {
    const humans = await getHumans();
    const human = humans.findOne(id)
    return human
}

// Mutation
const addHuman = async (data) => {
    const humans = await getHumans();
    const human = new Human();
    human.name = data.name,
    human.age = data.age,
    human.address = await getAddressById(data.address),
    await humans.save(human);
    return human;
}   

const removeHumanById = async (id) => {
    const humans = await getHumans();
    const human = await findHumanById(id);
    await humans.remove(human);
    return human;
}

const updateHuman = async (args) => {
    const humans = await getHumans();
    const human = await findHumanById(args.id);
    if(human){
        human.name = args.name;
        human.age = args.age;
        human.address = await getAddressById(args.address);
        console.log(human.address);
        //human.address = findAddressById(args.address);
        await humans.save(human);
        const newHuman = await findHumanById(args.id);
        return newHuman;
    }
}

export {
    getAllHumans,
    findHumanById,
    addHuman,
    removeHumanById,
    updateHuman
}