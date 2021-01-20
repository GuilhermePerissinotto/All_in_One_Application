import { addressSchema } from './addressSchema';
import { humanSchema } from './humanSchema';


export const typeDefs = `
    ${humanSchema} 
    ${addressSchema}
`