const express = require ("express")
const app = express();
const logger = require("morgan");
const path = require("path");
const knex = require("./db/client");


app.set("view engine", "ejs")
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));

console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>{
res.render("home")
});

app.post("/", (req, res) =>{
    const team_name = req.body.team_name;
    const team_members = req.body.team_members;
    const team_logo = req.body.team_logo;
    console.log("name: " + team_name)
    console.log("members: " + team_members)
    console.log("logo: " + team_logo)
    
    knex.insert({
        team_name:team_name, 
        team_members: team_members,
        team_logo: team_logo,})
        .into('cohort')
        .returning("*") // --- END SQL
        .then(data => {
        const cohort = data[0];
  // get the first value because db data
  // always comes in an array
  // -- EXECUTE SQL
  res.redirect(`/show/${cohort.id}`);
})
});

app.get("/show/:id", (req, res) => {
// In the path above, all the words prefixed with `:`
// are called a wildcard. This wildcard allows access
// the in that location of the URL.

// You can retrieve values with "req.params". This is an object
// similar to "req.query".
// Examples:
// /:id/:name/:job with url /100/Bob/Labourer
// req.params === { id: "100", name: "Bob", job: "Labourer"}
const id = req.params.id;

// req.query -> Query string ...?key=value&key1=value2
// req.params -> Url params ... articles/:id/:name
// req.body -> Posted form data .. input fields

knex("cohort")
.where("id", id)
.first() // when an array is returned as data, only return the first value
.then(cohort => {
  if (cohort) {
    res.render("show", { cohort: cohort });
  } else {
    res.send(`Cannot find cohort with id=${id}`);
  }
});
});

app.post("/show/:id", (req, res) => {
    const method = req.body.method;
})

const PORT = 5000;
const ADDRESS = "localhost";
app.listen(PORT, ADDRESS, () => {
console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});
