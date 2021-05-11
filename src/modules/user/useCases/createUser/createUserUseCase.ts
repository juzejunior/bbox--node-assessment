import User, { UserEvent, UserRole } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";
import { CreateUserDTO } from "./createUserDTO";
import { v4 as uuidv4 } from "uuid";

export class CreateUserUseCase {
     
    constructor(private usersRepository: UserRepository) {}

    async execute(data: CreateUserDTO) {
        const userExist = await this.usersRepository.findByEmail(data.email);
        
        if (userExist) {
            throw new Error('User already exist.');
        }
        
        const uuid = uuidv4();
        
        const user: User = User.create({
            uuid,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            password: data.password,
            role: UserRole.CLIENT,
            creationDate: new Date(),
            currentEvent: UserEvent.CREATION,
        }); 

        await this.usersRepository.save(user);
        return user;
    }
}