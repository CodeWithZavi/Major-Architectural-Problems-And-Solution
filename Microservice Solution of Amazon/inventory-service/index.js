const express = require("express");
const app = express();
const PORT = 3003;

let inventory = require("./inventory.json");

app.get("/", (req, res) => res.json(inventory));

app.listen(PORT, () => {
    console.log(`Inventory Service running on port ${PORT}`);
});
