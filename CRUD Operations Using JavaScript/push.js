db.podcasts.updateOne(
  {_id: ObjectId("6261a92dfee1ff300dc80bf1")},
  {$push: {hosts: "Nic Raboy"}}
);
//confirm
db.podcasts.findOne({title: "The Developer Hub"});
