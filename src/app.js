const exp = require("constants");
const express = require("express")
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 4000;
const path = require("path");

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    res.render('index');
})

app.get("/weather", (req, res) => {
    res.render('weather');
})

app.get("*", (req, res) => {
    res.render("error");
})

app.listen(port, () => {
    console.log(`listening at port no. ${port}`)
})

