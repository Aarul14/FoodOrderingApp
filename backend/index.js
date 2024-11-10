const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT;


const mongoDB = require("./db")
mongoDB();
app.use(cors({
    origin: ["http://localhost:3000", "https://yumhub-wine.vercel.app"],  // Add Vercel domain here
    methods: ["GET", "POST", "PUT", "DELETE"],  // List allowed methods
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"]
}));


app.use(express.json())
app.use('/api/', require("./Routes/CreateUser"))
app.use('/api/', require("./Routes/DisplayData"))
app.use('/api/', require("./Routes/OrderData"))
app.get('/', (req, res) => {
    res.send('Server is running...')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
