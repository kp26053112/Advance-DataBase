//elementsMatch
db.listingsAndReviews.find({amenities: {$elemMatch: {$eq: "Wifi"}}});