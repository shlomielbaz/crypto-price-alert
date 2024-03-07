export default interface Symbol {
    sequence: number;
    symbol: string;
    side: string;
    size: number;
    price: string;
    bestBidSize: number;
    bestBidPrice: string;
    bestAskPrice: string;
    tradeId: string;
    bestAskSize: number;
    ts: number;
}