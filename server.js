const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/article");
const articleRoute = require("./routes/article");
const methodOverride = require("method-override");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(methodOverride("_method"));
//Set view engine
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use("/articles", articleRoute);

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  res.render("articles/index", { articles: articles });
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server listening ${port}....`));
