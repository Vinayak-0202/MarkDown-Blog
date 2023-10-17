const express = require("express");
const mongoose = require("mongoose");
const articleRoute = require("./routes/article");
require("dotenv").config();
const app = express();

mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Set view engine
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use("/articles", articleRoute);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "New Articles",
      createdAt: new Date(),
      description: "This is a Description line , now you now",
    },
  ];
  res.render("articles/index", { articles: articles });
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server listening ${port}....`));
