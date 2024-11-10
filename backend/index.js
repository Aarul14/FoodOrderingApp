const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT || 3001;


const mongoDB = require("./db")
mongoDB();
app.use((req, res, next) => {
    const allowedOrigins = [
        "http://localhost:3000", 
        "https://yummhub.vercel.app" 
    ];

    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }
    
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


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
