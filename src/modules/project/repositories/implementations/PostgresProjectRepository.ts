import Project from "../../entities/Project";
import { ProjectRepository } from "../ProjectRepository";

export class PostgresProjectRepository implements ProjectRepository {
   
    async save(project: Project): Promise<void> {
        try {
            await project.save();
        } catch(err) {
            throw err;
        }
    }

    async fetchProjects(userId?: string): Promise<Project[]> {
        try {
            let projects: Project[];
            if (userId) projects = await Project.find({where: { owner: userId }});
            else projects = await Project.find();   
            return projects;
        } catch(err) {
            throw err;
        }
    }

    async fetchProjectById(id: string): Promise<Project> {
        try {
            return await Project.findOne({ where: [{ uuid: id }] });
        } catch(err) {
            throw err;
        }
    }

    async deleteProject(id: string): Promise<Boolean> {
        try {
            const project: Project = await Project.findOne({ uuid: id });
            if (project) {
                await Project.delete(project);
                return true;  
            }
            return false;
        } catch(err) {
            throw err;
        }
    }
}