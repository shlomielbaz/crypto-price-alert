import { OkPacket } from "mysql2";
import connection from "../db";

import ICrudRepository from "../interfaces/crud-repository.interface";
import PriceAlerts from "../models/price_alerts.model";

class PriceAlertsRepository implements ICrudRepository<PriceAlerts> {
  save(payload: PriceAlerts): Promise<PriceAlerts> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>(
        "INSERT INTO price_alerts (currency_pair, price, timestamp) VALUES(?,?,?)",
        [payload.currency_pair, payload.price, payload.timestamp],
        (err, res) => {
          if (err) reject(err);
          else
            this.retrieveById(res.insertId)
              .then((tutorial) => resolve(tutorial!))
              .catch(reject);
        }
      );
    });
  }
  
  retrieveAll(): Promise<PriceAlerts[]> {
    let query: string = "SELECT * FROM price_alerts";

    return new Promise((resolve, reject) => {
      connection.query<PriceAlerts[]>(query, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }

  filterBy(searchParams: any): Promise<PriceAlerts[]> {
    throw new Error("Method not implemented.");
  }

  retrieveById(id: number): Promise<PriceAlerts> {
    throw new Error("Method not implemented.");
  }
}

export default new PriceAlertsRepository();
