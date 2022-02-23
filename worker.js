//worker.js
const { parentPort } = require("worker_threads");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

parentPort.on("message", (data) => {
  parentPort.postMessage({
    message: data.item.first_name,
    item: threds(data.item),
  });
});

function threds(item) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("test");
    var bulk = dbo.collection("students").initializeUnorderedBulkOp();
    bulk.insert(item);
    bulk.execute();
  });
}
