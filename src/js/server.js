const express = require("express"),
  app = express(),
  cors = require('cors')
app.use(cors());
app.use(express.json());
const mass = [0]
app.post(`/`, (req, res) => {
  let {val} = req.body
  mass[0] = val
  app.get(`/`, (_, res) => {
    res.json({val: mass[0]})
    mass[0] = 0
  })
  res.status(204).send()
})

app.listen(4000, () => {
    console.log("Server running on port 4000");
  });