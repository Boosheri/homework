// requiring
const express = require ("express")
const app = express();
const logger = require("morgan");
const path = require("path");
const knex = require("./db/client");

// initializing
app.set("view engine", "ejs")
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));

// assigning logic
// if (method && quantity ) { 
//     if (method == "team_count"){
// console.log("team count")
//     }else if (method == "number_per_team"){
// console.log("number per team")
//     } 
// }
function teamCount(members, quantity) {
    const arrayOfMembers = members.split(",")
    const numOfMembers = arrayOfMembers.length //10
    const loopCount = Math.ceil(numOfMembers / quantity) //3
    let list_of_teams = []
    let team = []
    for(let i= 0; i < quantity; i++){
      for(let c= 0; c < loopCount; c++){
        let random_member = arrayOfMembers.sort(() =>{
          return 0.5 - Math.random()
        })[0]//9
        team.push(random_member)
        arrayOfMembers.shift()
        if(numOfMembers == 0)
          break;
      }list_of_teams.push(team)
      team = []
    }return list_of_teams
  }

  function numberPerTeam(members, quantity) {
    const arrayOfMembers = members.split(", ")
    const numOfMembers = arrayOfMembers.length //10
    const loopCount = Math.ceil(numOfMembers / quantity) //3
    let list_of_teams = []
    let team = []
    for(let i= 0; i < loopCount; i++){
      for(let c= 0; c < quantity; c++){
        let random_member = arrayOfMembers.sort(() =>{
          return 0.5 - Math.random()
        })[0]//9
        team.push(random_member)
        arrayOfMembers.shift()
        if(numOfMembers == 0)
          break;
      }list_of_teams.push(team)
      team = []
    }return list_of_teams
  }

// home route
app.get("/", (req, res) =>{
res.render("home")
});

// new cohort
app.post("/show", (req, res) =>{
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

  res.redirect(`/show/${cohort.id}`);
})
});

//  view new/specific cohort/assign teams
app.get("/show/:id", (req, res) => {

    // You can retrieve values with "req.params". This is an object
    // similar to "req.query".
    // Examples:
    // /:id/:name/:job with url /100/Bob/Labourer
    // req.params === { id: "100", name: "Bob", job: "Labourer"}
    const id = req.params.id;
    let result = []
    // req.query -> Query string ...?key=value&key1=value2
    // req.params -> Url params ... articles/:id/:name
    // req.body -> Posted form data .. input fields
    console.log('query body:', req.query);
    knex("cohort")
    .where("id", id)
    .first() // when an array is returned as data, only return the first value
    .then(cohort => {
        if (cohort) {
            
            if (req.query.method && req.query.quantity){
                const method = req.query.method
                const quantity = req.query.quantity

                if (method && quantity ) { 
                    if (method == "team_count"){
                        result = teamCount(cohort.team_members, quantity)
                    }else if (method == "number_per_team"){
                        result = numberPerTeam(cohort.team_members, quantity)
                    } 
                }
                console.log(result)
                res.render("show", { 
                    cohort: cohort, 
                    method: method,
                    quantity: quantity,
                    result: result})
                }
            else{
                res.render("show", {
                    cohort: cohort,
                    result: result});
            }
        } else {
            res.send(`Cannot find cohort with id=${id}`);
        }
    });
 
});

app.get ("/index",(req, res) => {
    knex("cohort")
    .orderBy("id", "desc")
    .then(cohort => {
        res.render("index",{
            cohort: cohort 
        })     
    })
});



const PORT = 5000;
const ADDRESS = "localhost";
app.listen(PORT, ADDRESS, () => {
console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});
