const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.editProduct=(req,res,next)=>{
  const editmode=req.query.edit;
  const prodid=req.params.productid;
  if(!editmode)
  {
    res.redirect('/')
  }
  Product.findbyid(prodid, product=>{  res.render('admin/edit-product',{
      prodid:req.params.productid,
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing:editmode,
      product:product
      });

  })

}

exports.postEditProduct=(req,res,next)=>{
const  id=req.body.ID;

  Product.fetchAll(oproduct=>{
  let  prodI=oproduct.findIndex(p=>p.id==id);

    const newprod={};


    newprod.price=req.body.price;
    newprod.title=req.body.title;
    newprod.id=id;
    newprod.description=req.body.description;
    newprod.imageUrl=req.body.imageUrl;

    const save=[...oproduct];

  save[prodI]=newprod;

  Product.saveprod(save);
  })
}

exports.postDelete=(req,res,next)=>{
  const id=req.body.productid;
console.log(id);



  Product.fetchAll(oproduct=>{
const  prodI=oproduct.findIndex(p=>p.id==id);

  const save=[...oproduct];
  //save[prodI]=null;
//  console.log(save);
//  Product.saveprod(save);

})


}
