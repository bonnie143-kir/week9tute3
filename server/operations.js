var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mongodb = require('mongodb');
var ObjectId = mongodb.ObjectId;


exports.insert = function(req, res) {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function(err, client) {
        if (err) throw err;
        let db = client.db("dbName22"); // Create a Product
        let doc = req.body
        myCol = db.collection("colName");
        // use insertOne method with callbeck
        myCol.insertOne(doc, function(err, result) {
            console.log("Inserted the following document into the collection:");
            console.log(doc);
            res.send(doc);
            client.close();
        });

    });
};

exports.find = function(req, res) {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function(err, client) {
        if (err) throw err;
        let db = client.db("dbName22");
        // use the method as promise 

        /*
        db.collection("colName").find({}).toArray().then(function(docs) {
            console.log("Found the following records");
            console.log(docs);
            res.send(docs);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            client.close();
        }); */

        db.collection("colName").find({}).toArray(function(err, docs) {
            if (err) throw err;
            console.log("Found the following records");
            console.log(docs);
            res.send(docs);
            client.close();

        });
    });
};

exports.update = function(req, res) {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function(err, client) {
        let db = client.db("dbName22");
        let queryJSON = req.body.query;
        // queryJSON._id = new ObjectId(req.params_id);
        let updateJSON = req.body.update;
        // Update document with queryJSON, set updateJSON
        db.collection("colName").updateMany(queryJSON, {
            $set: updateJSON
        }, function(err, result) {
            console.log("for the documents with", queryJSON);
            console.log("SET: ", updateJSON);
            res.send(result);
            client.close();
        });
    });
};

exports.delete = function(req, res) {
    MongoClient.connect(url, function(err, client) {
        let db = client.db("dbName22");
        let queryJSON = req.body;
        console.log(queryJSON);
        queryJSON._id = new ObjectId(queryJSON._id);

        db.collection("colName").deleteMany(queryJSON, function(err, result) {
            console.log("Removed the documents with: ", queryJSON, result);

            res.send(queryJSON);
            client.close();
        });
    });
};