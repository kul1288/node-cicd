const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("CI/CD Node App Running 🚀");
});

app.listen(3005, () => {
    console.log("Server running on port 3005");
});
