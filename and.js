//andLogic
db.listingsAndReviews.find({$and: [{amenities: "Wifi"}, {amenities: "TV"}]}); 