import { RowDataPacket } from "mysql2";

export default interface PriceAlerts extends RowDataPacket {
  id?: number;
  currency_pair?: string;
  price?: number;
  timestamp?: number;
}