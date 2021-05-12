import { UserRepository } from "../../repositories/UserRepository";

export class DeleteUserUseCase {
     
    constructor(private usersRepository: UserRepository) {}

    async execute(id: string) {        
        return await this.usersRepository.deleteUser(id);
    }
}