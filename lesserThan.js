// lesserThan query
db.grades.find({ "products.score": { $lt: 59  } })
