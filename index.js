// const express = require('express')
import express from "express"
import Conection  from './src/db.js';
import routes from './src/routes/index.js'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv';


dotenv.config();

const app = express()
app.use(cors());

app.use(morgan('tiny'));

Conection()

const port = process.env.PORT || 3000; 

app.use(express.json());

app.use('/', routes);


// app.use(express.urlencoded({ extended: true }));

// app.use((err, req, res, next) => { 
//   const status = err.status || 500;
//   const message = err.message || err;
//   console.error(err);
//   res.status(status).send(message);
// });


app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
