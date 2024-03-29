const mongoose = require("mongoose");

async function connect() {
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to DB:", connection.connection.name)
    } catch (err) {
        console.error("Database connection error:", err)
    }
}

module.exports = connect;