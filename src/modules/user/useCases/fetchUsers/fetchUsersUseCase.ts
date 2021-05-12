import { UserRepository } from "../../repositories/UserRepository";

export class FetchUsersUseCase {
     
    constructor(private usersRepository: UserRepository) {}

    async execute() {        
        const users = await this.usersRepository.fetchUsers();
        return users;
    }
}