const express =require('express');
const app =express();
const path= require('path');
const port= 80;

app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view engine','pug');

app.set('views',path.join(__dirname,"views"))

app.get('/',(req,res)=>{
    const con= "Marathon GYM";
    const params={"title":'Marathon gym', "content":con};
    res.status(200).render('home.pug',params);
    });

app.post('/',(req,res)=>{
    console.log(req.body)
    const con= "Marathon GYM";
    const params={"message":'Your form has been submitted successfully',"content":con};
    res.status(200).render('home.pug',params,);
    });

 

app.listen(port,()=>{
    console.log(`app running successfully on port ${port}`);
});

