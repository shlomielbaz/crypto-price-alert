# Rest API with MySQL 

| Methods	| Urls	                | Actions
| --------- | --------------------- | ---------------------- |
| GET       | api/tutorials         | get all Tutorials
| GET       | api/tutorials/:id     | get Tutorial by id
| POST      | api/tutorials         | add new Tutorial
| PUT       | api/tutorials/:id     | update Tutorial by id
| DELETE    | api/tutorials/:id     | remove Tutorial by id

| Methods	| Urls	                | Actions
| --------- | --------------------- | ---------------------- |
| GET       | api/employees         | get all Employees
| GET       | api/employees/:id     | get Employee by id
| POST      | api/employees         | add new Employee
| PUT       | api/employees/:id     | update Employee by id
| DELETE    | api/employees/:id     | remove Employee by id


## Project Structure
```bash
├── README.md
├── package-lock.json
├── package.json
├── server.ts
├── src
│   ├── controllers
│   │   ├── employee.controller.ts
│   │   ├── home.controller.ts
│   │   └── tutorial.controller.ts
│   ├── db
│   │   └── index.ts
│   ├── index.ts
│   ├── interfaces
│   │   └── crud-repository.interface.ts
│   ├── middlewares
│   │   └── auth.validation.ts
│   ├── models
│   │   ├── employee.model.ts
│   │   └── tutorial.model.ts
│   ├── repositories
│   │   ├── employee.repository.ts
│   │   └── tutorial.repository.ts
│   ├── routes
│   │   ├── employee.router.ts
│   │   ├── home.routes.ts
│   │   ├── index.ts
│   │   └── tutorial.routes.ts
│   └── services
│       ├── employee.service.ts
│       └── tutorial.service.ts
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
