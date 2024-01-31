//Value is matched within an array 
db.grades.find({ student_id: { $in: [654321, 546789] } })
