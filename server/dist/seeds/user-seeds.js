import { User } from '../models/user.js';
export const seedUsers = async () => {
    await User.bulkCreate([
        { username: 'JollyGuru', email: 'test@gmail.com', password: 'password' },
        { username: 'SunnyScribe', email: 'test2@gmail.com', password: 'password' },
        { username: 'RadiantComet', email: 'test3@gmail.com', password: 'password' },
    ], { individualHooks: true });
};
