"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var PORT = process.env.PORT || 5001;
app_1.app.listen(PORT, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://0.0.0.0:" + PORT);
});
typeorm_1.createConnection()
    .then(function (_) { return console.log("☁ [database]: Database connection established"); })
    .catch(function (error) {
    return console.error("\u26A0 [database]: Couldn't connect to the database: " + error);
});
//# sourceMappingURL=boot.js.map