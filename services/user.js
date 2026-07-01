import user from '../models/user.js';

export const create = async (Data) => {
    return user.create(Data);
}
