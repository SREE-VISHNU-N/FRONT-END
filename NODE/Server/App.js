const express = require('express');

const app = express();

app.listen(3000);

app.get('/',(req,res)=>{
    res.sendFile('./index.html', {root: __dirname});
})

app.get('/home',(req,res)=>{
    res.redirect('/');
})

app.get('/about',(req,res)=>{
    res.sendFile('./about.html', {root: __dirname});
})

app.get('/join',(req,res)=>{
    res.sendFile('./join.html', {root: __dirname});
})

app.use((req,res)=>{
    res.sendFile('./notFound.html',{root:__dirname});
})