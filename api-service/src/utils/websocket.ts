import WebSocket, { RawData } from "ws";
import priceAlertService from "../services/price_alerts.service";
import consecutiveIncreasesService from "../services/consecutive_increases.service";

const wss = new WebSocket.Server({ port: 2055 }, () => {
  console.log("server started");
});

// Connect to Poloniex WebSocket API
const poloniex_ws = new WebSocket(
  "wss://futures-apiws.poloniex.com/endpoint?token=DcXijCbKcWFew_i0BS8y6UNmBtlHW3UAvR4Nx4VADIn15tt-jDqMbYWNZ2II5fSnrClCBBv6dTDc8PMFHz-H6nLEAXbyrwF_nIpeynwBSXdfJXlmBNYhuWMGfZAja_q_-wgHjBcT7RhvJVwiLf8PgfnlXwiMtKLIY95Cnsz7zKo=.U9BXaJjXO4rLasHkx3JRzQ==&acceptUserMessage=true"
);

poloniex_ws.on("open", () => {
  console.log("Connected to Poloniex WebSocket API");

  // poloniex_ws.send(
  //   JSON.stringify({
  //     id: 1545910660739, //The id should be an unique value
  //     type: "subscribe",
  //     topic: "/contractMarket/ticker:BTCUSDTPERP", //Subscribed topic. Some topics support subscribe to the data of multiple trading pairs through ",".
  //     privateChannel: false, //Adopt the private channel or not. Set as false by default.
  //     response: true, //Whether the server needs to return the receipt information of this subscription or not. Set as false by default.
  //   })
  // );

  // poloniex_ws.send(
  //   JSON.stringify({
  //     event: "subscribe",
  //     channel: ["candles_minute_1"],
  //     symbols: ["btc_usdt"],
  //   })
  // );
});

let previousPrice: number | null = null;
const connections = {};

wss.on("connection", (ws: WebSocket, req) => {

  console.log(`Conn Url ${req.url?.indexOf('=')}`);

  poloniex_ws.send(
    JSON.stringify({
      id: 1545910660739, //The id should be an unique value
      type: "subscribe",
      topic: `/${req.url?.split('=')[1]}`, //Subscribed topic. Some topics support subscribe to the data of multiple trading pairs through ",".
      privateChannel: false, //Adopt the private channel or not. Set as false by default.
      response: true, //Whether the server needs to return the receipt information of this subscription or not. Set as false by default.
    })
  );

  poloniex_ws.on("message", (payload: RawData) => {
    const message = JSON.parse(payload.toString());

    console.log(message);

    // check if the price was changed then;
    //    update the database
    //    notify the connected client
    // wss.clients.forEach(function (client) {
    //   client.send(JSON.stringify(data));
    // });
  });
});

wss.on("message", (payload: RawData) => {
  console.log(payload);
  // poloniex_ws.send(
  //   JSON.stringify({
  //     id: 1545910660739, //The id should be an unique value
  //     type: "subscribe",
  //     topic: "/contractMarket/ticker:BTCUSDTPERP", //Subscribed topic. Some topics support subscribe to the data of multiple trading pairs through ",".
  //     privateChannel: false, //Adopt the private channel or not. Set as false by default.
  //     response: true, //Whether the server needs to return the receipt information of this subscription or not. Set as false by default.
  //   })
  // );
});

wss.on("listening", (ws: any) => {
  console.log("WebSocket Server listening on 2055");
});

poloniex_ws.on("error", (err) => {
  console.error("WebSocket error:", err);
});
