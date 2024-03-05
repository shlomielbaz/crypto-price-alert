# Real-time Crypto Price Alert Service
The project structure is a simple CRUD operations application, it utilizes the [three-tier architecture](https://www.ibm.com/topics/three-tier-architecture) which emphasizes the separation between message tier and business tier,

Within the time constraints, I managed to implement the above architecture, including connecting to Websocket, connecting to MariaDB

## Tables Structure
```sql

CREATE TABLE `consecutive_increases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `currency_pair` varchar(20) DEFAULT NULL,
  `first_price` decimal(20,10) DEFAULT NULL,
  `second_price` decimal(20,10) DEFAULT NULL,
  `first_timestamp` datetime DEFAULT NULL,
  `second_timestamp` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `price_alerts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `currency_pair` varchar(20) DEFAULT NULL,
  `price` decimal(20,10) DEFAULT NULL,
  `timestamp` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
```


## Project Structure
```bash
├── README.md
├── package-lock.json
├── package.json
├── server.ts
├── src
│   ├── controllers
│   │   └── home.controller.ts
│   ├── db
│   │   └── index.ts
│   ├── index.ts
│   ├── interfaces
│   │   └── crud-repository.interface.ts
│   ├── middlewares
│   │   └── auth.validation.ts
│   ├── models
│   │   ├── consecutive_increases.model.ts
│   │   └── price_alerts.model.ts
│   ├── repositories
│   │   ├── consecutive_increases.repository.ts
│   │   └── price_alerts.repository.ts
│   ├── routes
│   │   ├── home.routes.ts
│   │   └── index.ts
│   ├── services
│   │   ├── consecutive_increases.service.ts
│   │   └── price_alerts.service.ts
│   └── utils
│       └── websocket.ts
└── tsconfig.json
```

## Snapshots:
The connected client gets notified from server
<img width="1211" alt="image" src="https://github.com/shlomielbaz/crypto-price-alert/assets/426076/0ece72ef-9576-429b-8532-78347aa3c830">



## Project setup
```
npm install
```

### Run
```
npm run start
```

## More Practice
