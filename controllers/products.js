const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  const { company, name, sort } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
    console.log(company);
  }

  if (name) {
    queryObject.name = {
      $regex: name,
      $options: "i",
    };
    console.log(name);
  }

  let apiData = Product.find(queryObject);

  if (sort) {
    let sortFix = sort.replace(",", " ");
    queryObject.sort = sortFix;
    apiData = apiData.sort(sortFix);
  }
  // here we will get all products from the database
  const myData = await apiData;

  // now passing the data to the frontend
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query).sort("name -price");

  console.log(`You are searching for ${req.query}`);

  // now passing the data to the frontend
  res.status(200).json({ myData });
};

module.exports = {
  getAllProducts,
  getAllProductsTesting,
};
