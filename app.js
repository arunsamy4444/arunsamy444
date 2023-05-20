const express=require('express');
const app=express();

const path=require('path');

const port=3000;

app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/About-me',(req,res)=>{
    res.render('About-me');
});

app.get('/MyBio',(req,res)=>{
    res.render('MyBio');
});

app.get('/Contact-me',(req,res)=>{
    res.render('Contact-me');
    res.sendFile(__dirname + '/Contact-me')
});

app.use((req,res,next)=>{
    const validPaths=['/home','/About-me','/Contact-me','/MyBio'];

    if(validPaths.includes(req.path)){
        next();
    }
    else{
        res.status(404).send('<h1>OOPS! 404 Error , page not found </h1>');
    }
    });

app.listen(port,()=>{
    console.log('server is running');
});
