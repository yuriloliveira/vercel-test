const express = require("express");

const myMath = require("./src/mymath");

const app = express();

app.get("/:val1/summed-by/:val2", (req, res) => {
  const { val1, val2 } = req.params;

  res.json({ result: myMath.sum(val1, val2) });
});

app.listen(3000);

console.log("App listening in port 3000");
