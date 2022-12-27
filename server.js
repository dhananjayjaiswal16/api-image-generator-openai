const express = require("express");
const dotenv = require("dotenv").config();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const app = express();

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require("./routes/routes.js"));

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));