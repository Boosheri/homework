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






const PORT = 5000;
const ADDRESS = "localhost";
app.listen(PORT, ADDRESS, () => {
console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});
