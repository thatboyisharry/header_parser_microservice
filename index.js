const express=require('express');
const app=express();
const cors=require('cors');


const PORT=process.env.PORT||5000;

app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('public'));

app.get('/api',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami',(req,res)=>{
    let ip=req.ip;
    let language=req.acceptsLanguages()[0];
    let software=req.get("User-Agent");

    res.json({ipaddress:ip,language:language,software:software});
});


let listener =app.listen(PORT,()=>{
    console.log(`server is running on port ${listener.address().port}`);
});