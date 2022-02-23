const { Worker, isMainThread } = require("worker_threads");
const { StaticPool } = require("node-worker-threads-pool");
const express = require("express");
const app = express();

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

let items = [
  { first_name: "Sachin", last_name: "Tendulkar" },
  { first_name: "Sachin", last_name: "Tendulkar" },
  { first_name: "Virender", last_name: "Sehwag" },
  { first_name: "Shikhar", last_name: "Dhawan" },
  { first_name: "Mohammed", last_name: "Shami" },
  { first_name: "Shreyas", last_name: "Iyer" },
  { first_name: "Sachin", last_name: "Tendulkar" },
  { first_name: "Virender", last_name: "Sehwag" },
  { first_name: "Shikhar", last_name: "Dhawan" },
  { first_name: "Mohammed", last_name: "Shami" },
  { first_name: "Shreyas", last_name: "Iyer" },
  { first_name: "Sachin", last_name: "Tendulkar" },
  { first_name: "Virender", last_name: "Sehwag" },
  { first_name: "Shikhar", last_name: "Dhawan" },
  { first_name: "Mohammed", last_name: "Shami" },
  { first_name: "Shreyas", last_name: "Iyer" },
  { first_name: "Sachin", last_name: "Tendulkar" },
  { first_name: "Virender", last_name: "Sehwag" },
  { first_name: "Shikhar", last_name: "Dhawan" },
  { first_name: "Mohammed", last_name: "Shami" },
  { first_name: "Shreyas", last_name: "Iyer" },
  { first_name: "Sachin", last_name: "Tendulkar" },
  { first_name: "Virender", last_name: "Sehwag" },
  { first_name: "Shikhar", last_name: "Dhawan" },
  { first_name: "Mohammed", last_name: "Shami" },
  { first_name: "Shreyas", last_name: "Iyer" },
  { first_name: "Sachin", last_name: "Tendulkar" },
  { first_name: "Virender", last_name: "Sehwag" },
  { first_name: "Shikhar", last_name: "Dhawan" },
  { first_name: "Mohammed", last_name: "Shami" },
  { first_name: "Sachin", last_name: "Tendulkar" },
  { first_name: "Virender", last_name: "Sehwag" },
  { first_name: "Shikhar", last_name: "Dhawan" },
  { first_name: "Mohammed", last_name: "Shami" },
  { first_name: "Shreyas", last_name: "Iyer" },
  { first_name: "Sachin", last_name: "Tendulkar" },
  { first_name: "Virender", last_name: "Sehwag" },
  { first_name: "Shikhar", last_name: "Dhawan" },
  { first_name: "Mohammed", last_name: "Shami" },
  { first_name: "Shreyas", last_name: "Iyer" },
  { first_name: "Sachin", last_name: "Tendulkar" },
  { first_name: "Virender", last_name: "Sehwag" },
  { first_name: "Shikhar", last_name: "Dhawan" },
  { first_name: "Mohammed", last_name: "Shami" },
  { first_name: "Shreyas", last_name: "Iyer" },
  { first_name: "Sachin", last_name: "Tendulkar" },
  { first_name: "Virender", last_name: "Sehwag" },
  { first_name: "Shikhar", last_name: "Dhawan" },
  { first_name: "Mohammed", last_name: "Shami" },
  { first_name: "Shreyas", last_name: "Iyer" },
  { first_name: "Sachin", last_name: "Tendulkar" },
  { first_name: "Virender", last_name: "Sehwag" },
  { first_name: "Shikhar", last_name: "Dhawan" },
  { first_name: "Mohammed", last_name: "Shami" },
  { first_name: "Shreyas", last_name: "Iyer" },
  { first_name: "Sachin", last_name: "Tendulkar" },
  { first_name: "Virender", last_name: "Sehwag" },
  { first_name: "Shikhar", last_name: "Dhawan" },
  { first_name: "Mohammed", last_name: "Shami" },
  { first_name: "Shreyas", last_name: "Iyer" },
  { first_name: "Shreyas", last_name: "Iyer" },
];

// Create a static worker pool
const pool = new StaticPool({
  size: items.length,
  task: "./worker.js",
});

items.forEach((item) => {
  pool.exec({ item: item }).then((result) => {
    console.log(`${result.message} inserted!`);
  });
});

app.listen(3000, () => console.info("Express.js listening on port 3000."));
