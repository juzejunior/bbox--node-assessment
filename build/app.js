"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var error_middleware_1 = __importDefault(require("./middleware/error.middleware"));
var app = express_1.default();
exports.app = app;
app.use(express_1.default.json());
app.use(routes_1.router);
app.use(error_middleware_1.default);
//# sourceMappingURL=app.js.map