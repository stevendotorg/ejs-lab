import express from "express";
import path from "node:path"

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(import.meta.dirname, "public")));





// Write your code here:
app.get("/", (req, res) => {
  const userData = {
    username: "Steven Guerra"
  };
  res.render("home", userData);
});

app.get("/about",(req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
