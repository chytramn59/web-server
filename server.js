const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();
const port = process.env.PORT || 3000;

// app.get('/',(req,res)=>{
//     res.send('<h1>hello world</h1>');
// });
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public')); /* express middleware */
hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('screamIT',(text)=>{
    return text.toUpperCase();
})
//  app.use((req,res,next)=>{
//     var now = new Date().toString();
//     var log = `${now}: ${req.method} ${req.url}`;
//     console.log(log);
//     fs.appendFile('server.log',(err)=>{
//         if(err){
//             console.log('errps');
//         }
//       next();
//     });
  
//  });
// app.use((req,res,next)=>{
//     res.render('maintance.hbs');
// });
// app.use(express.static(__dirname + '/public')); /* express middleware */

app.get('/',(req,res)=>{
   res.render('home.hbs',{
    pageTitle:'home page',
    welcomeMessage:'welcome to brand new website',
  
   })
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
      pageTitle:'about page',
      
  });
});

app.get('/bad',(req,res)=>{
    res.send({
        errorMessage:'uable to load'
})
})

app.listen(port,()=>{
    console.log(`server is up now ${port}`);
});