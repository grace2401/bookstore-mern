import express, { request, response } from "express";
import { port, MONGODBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/bookRoute.js';
import cors from 'cors';


const app = express();

app.use(express.json());

app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET','POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }));

app.get('/',(request, response)=>{
    console.log(request);
    return response.status(234).send('Hey there ')
})

app.use('/books',booksRoute);

mongoose
    .connect(MONGODBURL)
    .then(()=>{
        console.log("App is connected to database");
        app.listen(port,()=>{
            console.log(`App is listening to port: ${port}`)
        })
    })
    .catch((error)=>{
        console.log(error);
    });
