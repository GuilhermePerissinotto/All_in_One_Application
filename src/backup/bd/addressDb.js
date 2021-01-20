let addresses = [ {
    id: "0",
    number: "0",
    street: 'Rua do João'
}]

// Query
function findAddressById (id){
    const address = addresses.find(address=> address.id == id);
    return address
}

// Mutation
const addAddress= (data) => {
    const address= {
        id: data.id,
        number: data.number,
        street: data.street
    }
    addresses.push(address);
    return address
}   

const removeAddressById = (id) => {
    const address = findById(id);
    addresses.pop(address);
    return address
}

const updateAddress= (args) => {
    const address= findById(args.id);
    if(address){
        //Da o update
        addresses.pop(address.id);
        address.number = args.number;
        address.street = args.street;
        addresses.push(address);
        return address
    }
}

module.exports = {
    addresses,
    findAddressById,
    addAddress,
    removeAddressById,
    updateAddress
}