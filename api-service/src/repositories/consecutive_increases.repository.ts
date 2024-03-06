import { OkPacket } from "mysql2";
import connection from "../db";

import ICrudRepository from "../interfaces/crud-repository.interface";
import ConsecutiveIncreases from "../models/consecutive_increases.model";

class ConsecutiveIncreasesRepository implements ICrudRepository<ConsecutiveIncreases> {
  save(payload: any): Promise<ConsecutiveIncreases> {


    
      //const values = [currencyPair, previousPrice, price, timestamp, timestamp] = payload;
      // db.query(query, values, (err, result) => {
      //   if (err) throw err;
      //   console.log('Consecutive increase stored:', result.insertId);
      // });





    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO consecutive_increases (currency_pair, first_price, second_price, first_timestamp, second_timestamp) VALUES (?, ?, ?, ?, ?)';

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
  
  retrieveAll(): Promise<ConsecutiveIncreases[]> {
    let query: string = "SELECT * FROM price_alerts";

    return new Promise((resolve, reject) => {
      connection.query<ConsecutiveIncreases[]>(query, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }

  filterBy(searchParams: any): Promise<ConsecutiveIncreases[]> {
    throw new Error("Method not implemented.");
  }

  retrieveById(id: number): Promise<ConsecutiveIncreases> {
    throw new Error("Method not implemented.");
  }
}

export default new ConsecutiveIncreasesRepository();
