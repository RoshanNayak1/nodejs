express = require ('express'); // import express    server for express
fs = require('fs');
app = express(); // create object


let text =fs.readFileSync("public/roshan.txt", 'utf-8')
console.log(text);
text1 = text.replace('roshan' , 'nitin');
console.log(text1);



app.set ('view engine','ejs') ; // import search engine
app.use('/image', express.static('public/image'));
app.use('/css', express.static('public/css'));

app.get ('/home',(req,res)=>{
    res.render('home');

})


app.listen( 2000, ()=>{
    console.log('server is running in port 2000')
});
app.get('/',(req,res)=>{
 res.send('hello google')
});
