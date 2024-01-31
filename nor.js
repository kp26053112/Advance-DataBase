//norLogic
db.listingsAndReviews.find({$nor: [{amenities: "Wifi"}, {amenities: "TV"}]}); 