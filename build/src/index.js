"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
require("./utils/websocket");
class Server {
    constructor(app) {
        this.config(app);
        //new Routes(app);
    }
    config(app) {
        const corsOptions = {
            origin: "http://localhost:8081"
        };
        app.use((0, cors_1.default)(corsOptions));
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
        app.use('/api/v1', routes_1.default);
    }
}
exports.default = Server;
