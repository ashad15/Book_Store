const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.id=Math.random();
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

static fetchAll(cb) {
    getProductsFromFile(cb);
  }
static findbyid(id,cb)
  {

    getProductsFromFile(product=>{

      const prod=product.find(p=>p.id==id);
  cb(prod);

    })

  }
  static saveprod(prod){
  
    fs.writeFile(p,JSON.stringify(prod),err=>{console.log(err)})
  }

};
