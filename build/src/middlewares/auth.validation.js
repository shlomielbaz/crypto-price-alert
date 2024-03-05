"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
function isAuth(req, res, next) {
    console.log(`Authorized router ${req.originalUrl}`);
    next();
}
exports.isAuth = isAuth;
