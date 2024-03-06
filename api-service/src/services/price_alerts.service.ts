import PriceAlerts from "../models/price_alerts.model";
import priceAlertsRepository from '../repositories/price_alerts.repository'


class PriceAlertService {
    async create(payload: PriceAlerts): Promise<PriceAlerts> {
      return await priceAlertsRepository.save(payload);
    }
  
    async findAll(title: string): Promise<PriceAlerts[]> {
      return await priceAlertsRepository.retrieveAll();
    }
  
    async findOne(id: number): Promise<PriceAlerts> {
      return await priceAlertsRepository.retrieveById(id);
    }
  }
  
  export default new PriceAlertService();