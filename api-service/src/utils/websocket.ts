import WebSocket, { RawData } from "ws";
import priceAlertService from "../services/price_alerts.service";
import consecutiveIncreasesService from "../services/consecutive_increases.service";

const wss = new WebSocket.Server({ port: 2055 }, () => {
  console.log("server started");
});

// Connect to Poloniex WebSocket API
const poloniex_ws = new WebSocket(
  "wss://futures-apiws.poloniex.com/endpoint?token=DcXijCbKcWFew_i0BS8y6UNmBtlHW3UAvR4Nx4VADIn15tt-jDqMbYWNZ2II5fSnrClCBBv6dTDc8PMFHz-H6vImI9MopvnqMmvaDqJJdVaMUhkXZG9ak2MGfZAja_q_-wgHjBcT7RhvJVwiLf8Pgae7d1M_0fxKUXJQ-4pi3zk=.FcGFPRxtf_w20GpwSc-w9A==&acceptUserMessage=true"
);

poloniex_ws.on("open", () => {
  console.log("Connected to Poloniex WebSocket API");
});

let previousPrice: number | null = null;
const connections: any = {};

wss.on("connection", (ws: WebSocket, req) => {
  const symbol: string = (req.url && req.url?.split("ticker:")[1]) || "";

  if (connections[symbol] == undefined) {
    connections[symbol] = [];
  }

  // save the ws client in the symbol's list
  connections[symbol].push(ws);

  const uid = new Date().getTime();

  poloniex_ws.send(
    JSON.stringify({
      id: uid, //The id should be an unique value
      type: "subscribe",
      topic: `/contractMarket/ticker:${symbol}`, //Subscribed topic. Some topics support subscribe to the data of multiple trading pairs through ",".
      privateChannel: false, //Adopt the private channel or not. Set as false by default.
      response: true, //Whether the server needs to return the receipt information of this subscription or not. Set as false by default.
    })
  );

  poloniex_ws.on("message", (payload: RawData) => {
    const message = JSON.parse(payload.toString());

    console.log("poloniex_ws", message);

    const { type } = message;

    if (type === "message") {
      // from the message read the symbole, e.g.: ETHUSDTPERP
      const {
        data: { symbol },
      } = message;

      if (symbol in connections) {
        // notify the clients in particulary symbol
        connections[symbol].forEach(function (client: WebSocket) {
          client.send(JSON.stringify(message));
        });
      }
    }

    // wss.clients.forEach(function (client) {
    //   client.send(JSON.stringify(message));
    // });
  });
});

wss.on("listening", (ws: any) => {
  console.log("WebSocket Server listening on 2055");
});

poloniex_ws.on("error", (err) => {
  console.error("WebSocket error:", err);
});
