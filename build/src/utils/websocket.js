"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const wss = new ws_1.default.Server({ port: 2055 }, () => {
    console.log("server started");
});
// Connect to Poloniex WebSocket API
const poloniex = new ws_1.default("wss://futures-apiws.poloniex.com/endpoint?token=DcXijCbKcWFew_i0BS8y6UNmBtlHW3UAvR4Nx4VADIn15tt-jDqMbYWNZ2II5fSnrClCBBv6dTDc8PMFHz-H6nLEAXbyrwF_nIpeynwBSXdfJXlmBNYhuWMGfZAja_q_-wgHjBcT7RhvJVwiLf8PgfnlXwiMtKLIY95Cnsz7zKo=.U9BXaJjXO4rLasHkx3JRzQ==&acceptUserMessage=true");
poloniex.on("open", () => {
    console.log("Connected to Poloniex WebSocket API");
    poloniex.send(JSON.stringify({
        id: 1545910660739, //The id should be an unique value
        type: "subscribe",
        topic: "/contractMarket/ticker:BTCUSDTPERP", //Subscribed topic. Some topics support subscribe to the data of multiple trading pairs through ",".
        privateChannel: false, //Adopt the private channel or not. Set as false by default.
        response: true, //Whether the server needs to return the receipt information of this subscription or not. Set as false by default.
    }));
});
let previousPrice = null;
wss.on("connection", (ws) => {
    poloniex.on("message", (payload) => {
        const message = JSON.parse(payload.toString());
        const { data, subject, topic, type } = message;
        wss.clients.forEach(function (client) {
            client.send(JSON.stringify(data));
        });
    });
    // ws.on('message', (data) => {
    //    console.log('data received \n '+ data)
    //    wss.clients.forEach(function(client) {
    //       client.send(data.toString());
    //    });
    // })
});
wss.on("listening", (ws) => {
    console.log("listening on 2055");
});
//
// ws.on("message", (payload: RawData) => {
//   const message = JSON.parse(payload.toString());
//   const { data, subject, topic, type } = message;
//   console.log(message);
//   // Handle incoming price update messages
//   if (message.event === "update") {
//     const price = parseFloat(data.price);
//     const currencyPair = data.currencyPair;
//     const timestamp = new Date();
//     // Check for consecutive price increases
//     if (previousPrice !== null && price > previousPrice) {
//       // Store event in MariaDB
//       //priceAlertService.create(data)
//       consecutiveIncreasesService.create(data);
//     }
//     // Update previous price
//     previousPrice = price;
//     // Notify clients of price increase
//     if (price > previousPrice) {
//       // Implement WebSocket server logic to notify clients
//     }
//     // // Store price alert in MariaDB
//     // const query = 'INSERT INTO price_alerts (currency_pair, price, timestamp) VALUES (?, ?, ?)';
//     // const values = [currencyPair, price, timestamp];
//     // db.query(query, values, (err, result) => {
//     //   if (err) throw err;
//     //   console.log('Price alert stored:', result.insertId);
//     // });
//   }
// });
// ws.on("error", (err) => {
//   console.error("WebSocket error:", err);
// });
