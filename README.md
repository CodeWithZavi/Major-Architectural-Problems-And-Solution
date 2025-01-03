# Microservices Architecture with Node.js and React

This project demonstrates a microservices architecture implemented with Node.js for the backend and React for the frontend. The system includes four key microservices:

- **User Service** - Manages user-related operations.
- **Order Service** - Manages orders and related tasks.
- **Inventory Service** - Tracks inventory levels.
- **API Gateway** - Acts as a gateway to route requests to the appropriate services.
- **Frontend** - A React application that interacts with the backend services via the API Gateway.

## Key Features

- **Microservices Architecture**: The system is broken down into smaller, modular services.
- **API Gateway**: Serves as a single entry point for all client requests.
- **Service Discovery**: Dynamically registers and discovers services using a discovery server.
- **Scalable and Fault-Tolerant**: Ensures high availability by isolating failures in individual services.
- **Frontend with React**: Displays user, order, and inventory data from the backend services.

---

## Folder Structure
AmazonMicroservices
├── discovery-server
│   ├── index.js
│   └── package.json
├── api-gateway
│   ├── index.js
│   └── package.json
├── user-service
│   ├── index.js
│   ├── package.json
│   └── users.json
├── order-service
│   ├── index.js
│   ├── package.json
│   └── orders.json
└── inventory-service
    ├── index.js
    ├── package.json
    └── inventory.json

---

## Technologies Used

- **Node.js** for backend microservices.
- **Express.js** for building APIs.
- **Axios** for HTTP requests from the frontend.
- **React** for building the user interface.
- **Consul** (or any discovery server) for service registration and discovery.

---

## How to Run the Code

Follow these steps to run the code locally on your machine:

### Step 1: Clone the Repository

```bash
git clone https://github.com/CodeWithZavi/Major-Architectural-Problems-And-Solution.git
cd microservices-architecture

# Microservices Architecture with API Gateway

## Step 2: Install Backend Dependencies
Navigate to the backend folder (for each service):

- user-service
- order-service
- inventory-service
- api-gateway

Install dependencies in each service folder:

```bash
cd user-service
npm install

cd ../order-service
npm install

cd ../inventory-service
npm install

cd ../api-gateway
npm install

# Project Setup

## Step 3: Install Frontend Dependencies

Navigate to the frontend folder:


Install React dependencies:


## Step 4: Start the Backend Services

Start each of the backend services in separate terminal windows or tabs:

### User Service

Navigate to the user-service folder and run:


Start the React app:


This will run the React app on [http://localhost:3000](http://localhost:3000).

## API Gateway Routes

The API Gateway forwards requests to different services based on the following routes:

- **`/users`**: Fetches a list of users from the User Service.
- **`/orders`**: Fetches a list of orders from the Order Service.
- **`/inventory`**: Fetches inventory data from the Inventory Service.

## Testing the Application

Open your browser and navigate to the React app:


You should see:

- A list of users fetched from the User Service.
- A list of orders fetched from the Order Service.
- A list of inventory items fetched from the Inventory Service.

Each of these lists will be populated by data fetched from the backend services through the API Gateway.

## Future Improvements

- **Service Authentication and Authorization**: Secure the services with JWT or OAuth.
- **Logging and Monitoring**: Integrate tools like Winston, Prometheus, or ELK Stack for enhanced logging and monitoring.
- **Automated Tests**: Write unit and integration tests using frameworks like Mocha or Jest.

## Contributors

- **Code With Zavi** - Author and Developer

## License

This project is licensed under the MIT License.
