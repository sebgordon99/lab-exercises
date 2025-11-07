const express = require('express')
const app = express()
const port = 3003

const cors = require("cors");
const corsOptions = { origin: ["http://127.0.0.1:5501", "http://localhost:3003", "http://127.0.0.1:5500", "http://localhost:5500"] };
app.use(cors(corsOptions));

// map all routes to the express app
const calculatorRoutes =
require('./routes/calculatorRoutes');
app.use('/calculator', calculatorRoutes);

// parse requests of content-type - application/json
app.use(express.json());

app.use("/", express.static("public"));




// export the app
module.exports = app;