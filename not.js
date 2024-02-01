//notLogic
db.listingsAndReviews.find({ amenities: { $not: { $in: ["Wifi", "TV"] } } });
