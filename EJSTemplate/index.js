const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("/", (_, resp) => {
  resp.render("home");
});

app.get("/login", (_, resp) => {
  resp.render("login");
});

app.get("/profile", (_, resp) => {
  const user = {
    name: "Himanshu Rai",
    email: "shrai31@gmail.com",
  };
  console.log("user", user);
  resp.render("profile", { user });
});
app.listen(5100);
