//Create Simple Index
db.grades.createIndex({"student_id":1},
{

"createdCollectionAutomatically" : false,
"numIndexesBefore" : 1,
"numIndexesAfter" : 2,
"ok" : 1
})
db.student.getIndexes()