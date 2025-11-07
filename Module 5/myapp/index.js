const app = require('./app');
const port = 3003


const testRoutes = require("./routes/myTestRoutes");

// import all user routes (up top in index.js)
const userRoutes = require("./routes/userRoutes");







// import all calculator routes (up the top)
const calculatorRoutes = require("./routes/calculatorRoutes");



app.use("/mytest", testRoutes);

// map the user routes to our app
app.use("/users", userRoutes);

// map the calculator routes to our app
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
 console.log(`Example app listening at
http://localhost:${port}`)
})
