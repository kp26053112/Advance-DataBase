//Geospatial Index
db.pois.createIndex({ location: "2dsphere" });