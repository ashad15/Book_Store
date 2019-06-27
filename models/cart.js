const fs =require('fs');
const path=require('path');
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);



module.exports=class abc{
static carts(id,nprice){


fs.readFile(p,(err,fileContent)=>{
  let cart={product:[],price:0}

  if(!err){
cart= JSON.parse(fileContent);
  }

let prevprod= cart.product.findIndex(prod=>prod.id==id);
const existingprod=cart.product[prevprod];
  let updprod;
if(existingprod)
{
  updprod={...existingprod}
  updprod.qty=updprod.qty+1;
  cart.product=[...cart.product]
  cart.product[prevprod]=updprod;
}
else{
  updprod={id:id,qty:1};
  cart.product=[...cart.product, updprod]
}
cart.price=cart.price+ +nprice;
fs.writeFile(p,JSON.stringify(cart),err=>{console.log(err)});


})

}}
