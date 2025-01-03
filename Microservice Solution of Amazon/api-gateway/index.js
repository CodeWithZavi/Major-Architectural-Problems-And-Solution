const express = require("express");
const axios = require("axios");

const app = express();
const DISCOVERY_SERVER = "http://localhost:8761";

// Forward requests to appropriate microservices
app.use("/users", async (req, res) => {
    const service = await getService("user-service");
    if (service) forwardRequest(service, req, res);
});

app.use("/orders", async (req, res) => {
    const service = await getService("order-service");
    if (service) forwardRequest(service, req, res);
});

app.use("/inventory", async (req, res) => {
    const service = await getService("inventory-service");
    if (service) forwardRequest(service, req, res);
});

// Helper functions
async function getService(serviceName) {
    try {
        const { data } = await axios.get(`${DISCOVERY_SERVER}/register`, {
            params: { name: serviceName },
        });
        return data;
    } catch {
        return null;
    }
}

function forwardRequest(service, req, res) {
    const url = `http://${service.address}:${service.port}${req.originalUrl}`;
    axios({ method: req.method, url, data: req.body })
        .then((response) => res.send(response.data))
        .catch(() => res.status(500).send("Service Unavailable"));
}

app.listen(8080, () => {
    console.log("API Gateway running on port 8080");
});
