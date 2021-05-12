import { UserRepository } from "../../repositories/UserRepository";

export class FetchUserByIdUseCase {
     
    constructor(private usersRepository: UserRepository) {}

    async execute(id: string) {        
        const user = await this.usersRepository.fetchUserById(id);
        return user;
    }
}