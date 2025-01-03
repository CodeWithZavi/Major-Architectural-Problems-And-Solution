const express = require("express");
const app = express();
const PORT = 3002;

let orders = require("./orders.json");

app.get("/", (req, res) => res.json(orders));

app.listen(PORT, () => {
    console.log(`Order Service running on port ${PORT}`);
});
