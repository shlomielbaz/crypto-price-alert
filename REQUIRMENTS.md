Test in Node.js: Real-time Crypto Price Alert Service

## Objective:
Develop a real-time crypto price alert service that monitors cryptocurrency prices via the Poloniex WebSocket API and notifies clients when specific price movements occur. This service will use MariaDB for data storage, focusing on the innovative and efficient handling of real-time data and notifications.
You are given an empty server and have to install and set up all dependencies on your own.

## Requirements:
MariaDB Setup: Configure MariaDB to store alert data. Design a schema to record instances where a cryptocurrency's price increases twice in a row, including the price and timestamp of the second increase.

## Poloniex WebSocket API Integration:
Connect to the Poloniex WebSocket API [https://api-docs.poloniex.com/futures/websocket/](https://api-docs.poloniex.com/futures/websocket/) to subscribe to real-time updates of cryptocurrency prices.
Focus on one or more markets based on user choice (e.g., BTC/USDT, ETH/USDT) for monitoring.

## Real-time Price Monitoring and Notification:
Implement logic to monitor price updates in real time from the WebSocket stream.
Notify clients via WebSocket when the price of a monitored cryptocurrency goes up.

## Special Condition Handling:
When the price of a cryptocurrency increases twice consecutively, store the event in the MariaDB database with the price and the exact timestamp of the second increase.
Client WebSocket Connection: Allow clients to connect via WebSocket to your service to receive real-time alerts.
Error Handling and Logging: Implement robust error handling and logging mechanisms to manage and debug issues during WebSocket communication and database operations.

## Deliverables:
#### A private Git repository that contains:
- Source code for the Node.js application, including WebSocket and MariaDB integration.
- A SQL script for creating the necessary database tables and schema in MariaDB.
- A README file detailing: Setup instructions for the database and the Node.js application.
- How to start the service and connect as a client to receive alerts.
- An explanation of the logic used for monitoring prices and determining consecutive increases.

## Evaluation Criteria:
#### Functionality:
The application must accurately monitor cryptocurrency prices, notify clients of increases, and store specific events in the database as required.
Code Quality and Organization: The source code should be well-organized, readable, and follow the best practices for Node.js development.

#### Database Design:
The MariaDB schema and data storage approach should be efficient and suitable for the task requirements.

#### Error Handling and Logging:
The application should gracefully handle and log errors, especially those related to WebSocket connections and database operations.

#### Documentation:
The README file must provide clear setup and operation instructions, ensuring that the evaluator can easily run the service and understand its functionality.
This task is designed to assess a candidate's ability to integrate with real-time data streams, manage database operations, and implement server-client communication in a Node.js environment. It also tests the developer's capability to handle real-world scenarios where data processing and storage are tied to external events and conditions.

#### UI Task:
Create a simple web application test UI that connects to the service.
You can use any web framework (e.g. React, Angular, Vue.js etc)
