const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const productRoute = require('./routes/products');

app.get("/", (req, res)=>{
  res.send("Express Here")
});

app.use("/api/items", productRoute);

app.listen(3001, ()=>{
  console.log("The express listening")
})

module.exports = app