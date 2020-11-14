const express = require("express");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const dbConnect = require('./connect/dbConnect');
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(dbConnect);
app.use(routes);


app.listen(PORT, () => console.log(`The server listens on port ${PORT}`)); 
