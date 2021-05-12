import HttpException from "../../../exceptions/HttpException";
 
class ProjectNotFoundException extends HttpException {
  constructor() {
    super(404, "Project not found!");
  }
}

export default ProjectNotFoundException;