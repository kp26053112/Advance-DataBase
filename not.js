//notLogic
db.listingsAndReviews.find({$not: [{amenities: "Wifi"}, {amenities: "TV"}]}); 