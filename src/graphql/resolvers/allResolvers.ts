import { addressResolver } from './addressResolver';
import { humanResolvers } from './humanResolvers';

export const resolvers = [
    humanResolvers,
    addressResolver
]