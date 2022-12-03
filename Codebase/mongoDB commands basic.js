// Inserting data in mongo DB :-
use model
db.items.insertOne({name:"Realme U1", price:2000, rating: 4.5, sold: 98})
db.items.insertMany([{name:"Realme U1", price:2000, rating: 4.5, sold: 98}, {name:"oppo f7", price:200, rating: .5, sold: 9}] )

// to copy-paste in windows powershell, just right click ... 
db.items.insertOne({name:Sudarshan, price:2000, rating: 4.5, sold:45 })