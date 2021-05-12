import { ProjectRepository } from "../../repositories/ProjectRepository";

export class DeleteProjectUseCase {
     
    constructor(private projectsRepository: ProjectRepository) {}

    async execute(id: string) {        
        return await this.projectsRepository.deleteProject(id);
    }
}