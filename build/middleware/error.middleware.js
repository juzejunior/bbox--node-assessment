"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorMiddleware(error, request, response, next) {
    var status = error.status || 500;
    var message = error.message || 'Server Error';
    response
        .status(status)
        .send({
        status: status,
        message: message,
    });
}
exports.default = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map