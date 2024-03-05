"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
class PriceAlertsRepository {
    save(payload) {
        return new Promise((resolve, reject) => {
            db_1.default.query("INSERT INTO price_alerts (currency_pair, price, timestamp) VALUES(?,?,?)", [payload.currency_pair, payload.price, payload.timestamp], (err, res) => {
                if (err)
                    reject(err);
                else
                    this.retrieveById(res.insertId)
                        .then((tutorial) => resolve(tutorial))
                        .catch(reject);
            });
        });
    }
    retrieveAll() {
        let query = "SELECT * FROM price_alerts";
        return new Promise((resolve, reject) => {
            db_1.default.query(query, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        });
    }
    filterBy(searchParams) {
        throw new Error("Method not implemented.");
    }
    retrieveById(id) {
        throw new Error("Method not implemented.");
    }
}
exports.default = new PriceAlertsRepository();
