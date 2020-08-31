const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const keys = require("./config/dev");
const PORT = process.env.PORT || 5000;
require("./controllers/facility");

const auth = require("./routes/auth");
const user = require("./routes/user");
const floor = require("./routes/floor");
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", auth);
app.use("/user", user);
app.use("/floor", floor);

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => {
    console.log(err);
  });

mongoose.connection.on("connected", () => {
  console.log("Connected to Mongoose Instance");
});

mongoose.connection.on("error", err => {
  console.log(err);
});

app.get("/", (req, res) => {
  res.send("Hello There mate");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
