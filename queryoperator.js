#logicandquery
db.restaurants.find({$and: [{cuisine: "Jewish"}, {cuisine: "Hamburgers"}]}); 
#logicorquery
db.restaurants.find({$or: [{borough: "Manhattan"}, {borough: "Brooklyn"}]});
#logicnorquery
db.restaurants.find({ $nor: [{cuisine: "Bakery"},{cuisine: "American"}]})
#logicnotquery
db.grades.find({class_id:{$not:{$gt:460}}})
#insertOnequery
db.listingsAndReviews.insertOne({
  student_id: 123456,
  products: [
    { type: "exam", score: 85 },
    { type: "homework", score: 92 },
    { type: "quiz", score: 78 },
  ],
  class_id: 550,
});

#output{
  acknowledged: true,
  #insertedId: ObjectId('65ba7df3f1d84eeb1df5ea49')
}
#insertManyquery
db.restaurants.insertMany([
  {
    restaurant_id: 987655,
    cuisine: "Mexican",
    address: {
      street: "456 Oak Avenue",
      city: "Smallville",
      state: "TX",
      zip: "67890",
    },
    rating: 4.2,
    reviews: [
      { username: "tacoLover", rating: 5, comment: "Best tacos in town!" },
      { username: "spiceFanatic", rating: 4, comment: "Spicy and delicious." },
    ],
  },
  {
    restaurant_id: 987656,
    cuisine: "Japanese",
    address: {
      street: "789 Pine Street",
      city: "Metroville",
      state: "NY",
      zip: "54321",
    },
    rating: 4.8,
    reviews: [
      { username: "sushiMaster", rating: 5, comment: "Fresh sushi, amazing!" },
      { username: "ramenFan", rating: 4, comment: "Authentic ramen." },
    ],
  },
 
]);
#output{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('65bb258082d409d7f2efeece'),
    '1': ObjectId('65bb258082d409d7f2efeecf')
  }
}

#greaterthan
db.grades.find({ "products.score": { $lt: 59  } })
#lessthan
db.grades.find({ "products.score": { $lt: 59  } })
#GREATERTHANEQUALTO
db.zips.find({ "pop": { $lte: 1500  } })
#LessthanEqualto
db.zips.find({ "pop": { $lte: 1500  } })

