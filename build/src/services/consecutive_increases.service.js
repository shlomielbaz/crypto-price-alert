"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const price_alerts_repository_1 = __importDefault(require("../repositories/price_alerts.repository"));
class ConsecutiveIncreasesService {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield price_alerts_repository_1.default.save(payload);
        });
    }
    findAll(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield price_alerts_repository_1.default.retrieveAll();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield price_alerts_repository_1.default.retrieveById(id);
        });
    }
}
exports.default = new ConsecutiveIncreasesService();
