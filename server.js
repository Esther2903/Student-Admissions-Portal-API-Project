const express = require('express');
const cors = require('cors');
const userRoute = require('./src/routers/UserRouter');

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000


app.use(express.json());
app.use(cors())

app.use('/api/users', userRoute);

app.get("/", (req, res) => {
        res.send("Welcome to my web server, this is my Student Admissions Portal API");
});

app.listen(PORT, () => console.log(`Listening on: ${PORT}`))