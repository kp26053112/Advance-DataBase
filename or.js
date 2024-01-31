//orLogic
db.listingsAndReviews.find({$or: [{amenities: "Wifi"}, {amenities: "TV"}]}); 