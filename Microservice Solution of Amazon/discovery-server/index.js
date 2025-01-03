const express = require("express");
const Consul = require("consul");

const app = express();
const consul = new Consul();

app.get("/", (req, res) => {
    res.send("Discovery Server Running");
});

// Register a service (for demo purposes, in production this should be done dynamically)
app.post("/register", (req, res) => {
    const { name, address, port } = req.query;
    consul.agent.service.register({ name, address, port }, (err) => {
        if (err) res.status(500).send("Registration Failed");
        else res.send("Service Registered");
    });
});

app.listen(8761, () => {
    console.log("Discovery Server running on port 8761");
});
