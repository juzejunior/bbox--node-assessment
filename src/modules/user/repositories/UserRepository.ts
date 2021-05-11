import User from "../entities/User";

export interface UserRepository {
    getUsers(): Promise<User[]>;
    findByEmail(email: String): Promise<User>;
    save(user: User): Promise<void>;
}