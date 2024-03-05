# Real-time Crypto Price Alert Service


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



## Project setup
```
npm install
```

### Run
```
npm run start
```

## More Practice
