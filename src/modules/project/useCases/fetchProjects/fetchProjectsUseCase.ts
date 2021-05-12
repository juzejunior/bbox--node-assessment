import { ProjectRepository } from "../../repositories/ProjectRepository";

export class FetchProjectsUseCase {
     
    constructor(private projectsRepository: ProjectRepository) {}

    async execute(userId?: string) {        
        const projects = await this.projectsRepository.fetchProjects(userId);
        return projects;
    }
}