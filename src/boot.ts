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
