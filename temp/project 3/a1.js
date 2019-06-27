const express=require('express')
const path =require('path')
const bp=require('body-parser')


const app=express();
app.use(bp.urlencoded({extended:false}))
app.set('view engine','ejs');
arr=[];
app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>{

  res.render('temp');
})
app.post('/users',(req,res)=>{

  arr.push({t:req.body.a})
  console.log(arr)
  res.render('temp2',{dt:arr});
})
app.listen(8080)
