import { RowDataPacket } from "mysql2";

export default interface ConsecutiveIncreases extends RowDataPacket {
  id?: number;
  currencyPair?: string;
  previousPrice?: number;
  price?: number;
  first_timestamp?: number;
  second_timestamp?: number;
}


