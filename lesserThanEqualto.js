// lesserThanEqualTo query
db.grades.find({ "products.score": { $lte: 59 } })

