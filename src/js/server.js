const express = require("express"),
  app = express(),
  cors = require('cors'),
  {PythonShell} = require('python-shell')
app.use(cors());
app.use(express.json());
app.post(`/`, (req, res) => {
  let {size, message} = req.body
  PythonShell.run('src/backend/bomber.py', {
      args: [message, size]
    })
  res.status(204).send()
})

app.listen(4000, () => {
    console.log("Server running on port 4000");
  });