const express = require("express");
const app = express();
const PORT = 3001;

let users = require("./users.json");

app.get("/", (req, res) => res.json(users));

app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
