import { app } from "./app";
import "reflect-metadata";
import { createConnection } from "typeorm";
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://0.0.0.0:${PORT}`);
});

createConnection()
  .then((_) => console.log("☁ [database]: Database connection established"))
  .catch((error) =>
    console.error(`⚠ [database]: Couldn't connect to the database: ${error}`)
);
/*
app.get("/projects/:projectId", async (req: Request, res: Response) => {
  const { projectId } = req.params;
  const projects: Project = await Project.findOne({
    where: { uuid: projectId },
  });
  res.status(200).json(projects);
});

app.delete("/projects/:projectId", async (req: Request, res: Response) => {
  const { projectId } = req.params;
  const project: Project = await Project.findOne({
    where: { uuid: projectId },
  });
  if (project) {
    Project.delete(project);
    res.sendStatus(204);
  } else res.status(404).json({ message: "User not found!" });
});

*/
