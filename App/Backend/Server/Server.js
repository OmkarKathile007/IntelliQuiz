import express from 'express'

const app=express()
const port=3000;

app.get('/',(req,res)=>{
    res.send('This can be send using the Data');
})

app.listen(port,()=>{
    console.log(`Server Running on Port : ${port}`);
})