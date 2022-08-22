const associations = require("../asociations");

const verifyAssociation = (req, res, next) => {
  const { slug } = req.params;

  const association = associations.find((association) => {
    return slug === association.slug;
  });

  if (association) {
    req.association = association;
    next();
  } else {
    res.status(404).json("Association not found");
  }
};

module.exports = {
  verifyAssociation,
};
