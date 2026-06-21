import express from "express";

const app = express();

//Middleware 

app.use(express.json());

const PORT = 3000;


app.listen(3000,()=>{

     console.log("Server started on PORT : " + PORT);
     
})