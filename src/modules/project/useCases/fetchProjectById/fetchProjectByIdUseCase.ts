import { ProjectRepository } from "../../repositories/ProjectRepository";

export class FetchProjectByIdUseCase {
     
    constructor(private projectsRepository: ProjectRepository) {}

    async execute(id: string) {        
        const project = await this.projectsRepository.fetchProjectById(id);
        return project;
    }
}