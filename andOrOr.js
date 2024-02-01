//andOrOrLogic
db.listingsAndReviews.find({
  $and: [
    {$or: [{amenities: "Wifi"}, {amenities: "TV"}]},
    {$or: [{amenities: "Kitchen"}, {amenities: "Heating"}]},
  ],
});