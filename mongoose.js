const mongoose = require("mongoose");

//import model created in models folder
const Product = require("./models/product");

mongoose
  .connect(
    "[]",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("DB connection has also been established");
  })
  .catch(() => {
    console.log("Connection to the DB has failed");
  });

const createItem = async (req, res, next) => {
  const createdItem = new Product({
    type: req.body.type,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    stock: req.body.category,
    colors: req.body.colors,
    design: req.body.design,
    fabric: req.body.fabric,
    discount: req.body.discount,
    images: req.body.images,
  });

  const result = await createdItem.save();
  res.json({
    message: "new item added to DB succesfully",
    pID: result._id,
    type: result.type,
    name: result.name,
  });
};

exports.createItem = createItem;
