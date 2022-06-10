const Article = require('../models/Article');

//Retrieving All Article ---------------------------------------
module.exports.getAllArticle = () => {
  return Article.find({}).then((result) => {
    return result;
  });
};

// CREATE A PRODUCT -----------------------------------------------------------------------------
module.exports.addArticle = (data) => {
  //Create a new object
  let newArticle = new Article({
    title: data.body.title,
    content: data.body.content,
  });

  //Saves the created object to our database
  return newArticle.save().then((_product, error) => {
    //Course creation failed
    if (error) {
      return false;
    } else {
      //Course Creation successful
      return true;
    }
  });
};

// DELETE A PRODUCT  -----------------------------------------------------------------------------
module.exports.deleteArticle = (productId) => {
  return Article.findByIdAndDelete(productId).then((result) => {
    return result ? true : false;
  });
};
