import User from "../../entities/User";
import { UserRepository } from "../UserRepository";

export class PostgresUserRepository implements UserRepository {
    async findByEmail(email: String): Promise<User> {
        try {
            const user = await User.findOne({ where: [{ email: email }] });   
            return user;  
        } catch(err) {
            throw err;
        }
    }

    async save(user: User): Promise<void> {
        try {
            await user.save();
        } catch(err) {
            throw err;
        }
    }

    async fetchUsers(): Promise<User[]> {
        try {
            return await User.find();     
        } catch(err) {
            throw err;
        }
    }

    async fetchUserById(id: string): Promise<User> {
        try {
            return await User.findOne({ where: [{ uuid: id }] });
        } catch(err) {
            throw err;
        }
    }
}