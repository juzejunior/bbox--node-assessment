import Project from "../../entities/Project";
import { ProjectRepository } from "../../repositories/ProjectRepository";
import { CreateProjectDTO } from "./createProjectDTO";
import { v4 as uuidv4 } from "uuid";
import User from "../../../user/entities/User";

export class CreateProjectUseCase {
     
    constructor(private projectRepository: ProjectRepository) {}

    async execute(data: CreateProjectDTO) {  
        const uuid = uuidv4();
        const user: User = await User.findOne({ uuid: data.userId });
        const project: Project = Project.create({
            uuid,
            description: data.description,
            owner: user,
            creationDate: new Date(),
        });

        await this.projectRepository.save(project);
        return project;
    }
}