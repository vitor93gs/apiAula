require("dotenv").config();
const express = require("express");
const connect = require("./Config/db.config")
connect();

const app = express()
app.use(express.json());

const contentRouter = require("./Routes/content.routes");
app.use("/content", contentRouter)

app.listen(Number(process.env.PORT), () =>{
    console.log(`Server up and running on port ${Number(process.env.PORT)}.`)
})

