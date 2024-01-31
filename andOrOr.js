//andOrOrLogic
db.routes.find({
  $and: [
    {$or: [{dst_airport: "SEA"}, {src_airport: "SEA"}]},
    {$or: [{"airline.name": "American Airlines"}, {airplane: 320}]},
  ],
});