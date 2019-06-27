const Product = require('../models/product');
const cart =require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {

      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};
exports.getdetails = (req,res,next)=>{
  const id =req.params.prodid;

  Product.findbyid(id,productD=>{
    res.render('shop/product-detail',{product:productD,pageTitle:'Details',path:'/product'})
  })


}
exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};


exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};
exports.postCart=(req,res,next)=>{
  const id= req.body.prodid;
  const price=req.body.price;
  cart.carts(id,price);

}


exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
