const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const app = express()
app.listen(process.env.PORT, () => {
 console.log("Server is running on port 8080")
})