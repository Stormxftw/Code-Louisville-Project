var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('recipelist', ['recipelist']);


//STATIC SERVER
app.use(express.static('public'));

//GETS ALL RECIPES
app.get('/recipelist', function (req, res) {
   console.log('GET RECIVED!'); 
   db.recipelist.find(function (err, docs){
       console.log(docs);
       res.json(docs);
   });
});

//ROUTE FOR ENCHILADES TO MONGO
app.get('/recipelist/enchiladas', function (req, res) {
	var id = req.params.id;
	db.recipelist.findOne({"_id": NewMongoObject('571a7264dbd3ca991f6b38db')}, function (err, doc)  {
        console.log(doc);
		res.json(doc);
	});
});

//ROUTE FOR MUFFINS TO MONGO
app.get('/recipelist/muffins', function (req, res) {
	var id = req.params.id;
	db.recipelist.findOne({"_id": NewMongoObject('571ea0279f9547b88c9c5e93')}, function (err, doc)  {
        console.log(doc);
		res.json(doc);
	});
});

//ROUTE FOR CHILLI TO MONGO
app.get('/recipelist/chilli', function (req, res) {
	var id = req.params.id;
	db.recipelist.findOne({"_id": NewMongoObject('571ebdf89f9547b88c9c5e94')}, function (err, doc)  {
        console.log(doc);
		res.json(doc);
	});
});











//FIND ONE MONGO HELPER FUNCTION
function NewMongoObject (id) {
    this.id = id;
    return new mongojs.ObjectId(this.id);
}















//PORT APP RUNNING ON LOCALLY
app.listen(3000);
console.log('server is running on port 3000');