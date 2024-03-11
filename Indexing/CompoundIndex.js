//Compound Index
db.student.createIndex({ student_id: 1, score: 1 },
{
			"createdCollectionAutomatically": false,
			"numIndexesBefore":1,
			"numIndexesAfter":2,
			"ok":1
})
db.student.getIndexes()
