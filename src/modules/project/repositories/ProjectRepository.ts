import Project from "../entities/Project";

export interface ProjectRepository {
    fetchProjects(userId?: string): Promise<Project[]>;
    fetchProjectById(id: string): Promise<Project>;
    save(project: Project): Promise<void>;
    deleteProject(id: string): Promise<Boolean>;
}