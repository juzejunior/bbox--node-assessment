import User from "../entities/User";

export interface UserRepository {
    fetchUsers(): Promise<User[]>;
    fetchUserById(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;
}