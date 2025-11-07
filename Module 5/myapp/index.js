const express = require("express");
const app = express();
// const app2 = express();
const port = 3003;
// const port2 = 3004;
const testRoutes =
require('./routes/myTestRoutes');

const cors = require("cors");
const corsOptions = {origin: "http://localhost:5501"};
app.use(cors(corsOptions));

// import all calculator routes (up the top)
const calculatorRoutes =
require('./routes/calculatorRoutes');

app.listen(port, () => {
  console.log(`Example app listening at
http://localhost:${port}`);
});

// app2.get("/", (req, res) => {
//   res.send("Hello World 2!");
// });

// app2.listen(port2, () => {
//   console.log(`Example app listening at
// http://localhost:${port2}`);
// });

app.use("/", express.static("public"));

app.use('/mytest', testRoutes);

// map the calculator routes to our app
app.use('/calculator', calculatorRoutes);