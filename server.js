const express = require("express");
const articleRoute = require("./routes/article");
const app = express();

//Set view engine
app.set("view engine", "ejs");
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
app.listen(5000, console.log(`Server listening ${port}....`));
