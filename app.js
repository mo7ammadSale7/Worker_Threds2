const { Worker, isMainThread } = require("worker_threads");
const express = require("express");
const app = express();

let items = [
  { first_name: "Sachin", last_name: "Tendulkar" },
  { first_name: "Virender", last_name: "Sehwag" },
  { first_name: "Shikhar", last_name: "Dhawan" },
  { first_name: "Mohammed", last_name: "Shami" },
  { first_name: "Shreyas", last_name: "Iyer" },
];

const worker = new Worker("./worker.js");

//Listen for a message from worker
worker.on("message", (result) => {
  console.log(result.message);
});

worker.on("error", (error) => {
  console.log(error);
});
worker.postMessage({ items: items });

app.listen(3000, () => console.info("Express.js listening on port 3000."));
