import { Address } from '../../bd/entity/Address';
import { getRepository } from "typeorm";

const getAddresses = async() => {
    return await getRepository(Address);
}
// Query

const getAllAddresses = async() => {
    const addresses = await getAddresses();
    return await addresses.find();
}

const getAddressById = async(id) => {
    const addresses = await getAddresses();
    const address = await addresses.findOne(id);
    return address
}

// Mutation
const addAddress = async (data) => {
    const addresses = await getAddresses();
    const address = new Address();
    address.number = data.number,
    address.street = data.street
    await addresses.save(address);
    return address
}   

const removeAddressById = async (id) => {
    const addresses = await getAddresses();
    const address = await getAddressById(id);
    addresses.remove(address);
    return address;
}

const updateAddress = async (args) => {
    const addresses = await getAddresses();
    const address = await getAddressById(args.id);
    if(address){
        address.street = args.street;
        address.number = args.number;
        await addresses.save(address);
        return address;
    }
}

export{
    getAllAddresses,
    getAddressById,
    addAddress,
    removeAddressById,
    updateAddress
}