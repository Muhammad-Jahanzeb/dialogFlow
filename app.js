// const dotenv = require("dotenv").config();
const express = require("express");

//initialize express application
const app = express();

//specify port
const PORT = process.env.PORT || 5001
app.use(express.json())
app.use('/api',require('./routes/dialogflowRoutes'))
app.use('/',require('./routes/dialogflowRoutes'))


//make our app listen to incoming requests
app.listen(PORT, ()=>console.log(`Server running on: http://localhost:${PORT}`))
//