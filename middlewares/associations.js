const associations = require("../asociations");

const checkIfExists = (req, res, next) => {
  const { slug } = req.params;

  const association = associations.find((association) => {
    return slug === association.slug;
  });

  const associationIndex = associations.findIndex((association) => {
    return slug === association.slug;
  });

  if (association) {
    req.association = association;
    req.associationIndex = associationIndex;
    next();
  } else {
    res.status(404).json("Association not found");
  }
};

module.exports = {
  checkIfExists,
};
