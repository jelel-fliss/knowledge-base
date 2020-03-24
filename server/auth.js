const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();

app.listen(8001, () => {
  console.log("Authentication Server running on port 8001");
});

app.use(cors());
app.use(bodyParser.json());

const accessTokenSecret = "AvAxIa333";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "avaxia"
});
connection.connect(err => {
  if (err) throw err;
  console.log("DataBase Connected!");
});

app.post("/auth", (req, res) => {
  // Read email and password from request body
  const { email, password } = req.body;
  let user;
  console.log(req.body);
  // Filter user from the users array by email and password
  let sql =
    'SELECT ID, Name, Prename, Email, Birthday, BirthPlace, Position FROM Users WHERE email = "' +
    email +
    '" AND password = "' +
    password +
    '";';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    user = JSON.stringify(results) !== JSON.stringify([]); // User Found
    if (user === true) {
      // Generate an access token

      const accessToken = jwt.sign({ email: email }, accessTokenSecret, {expiresIn: '10m'});

      res.json({
        ID: results[0].ID,
        Name: results[0].Name,
        Prename: results[0].Prename,
        Email: results[0].Email,
        Birthday: results[0].Birthday,
        BirthPlace: results[0].BirthPlace,
        Position: results[0].Position,
        token: accessToken
      });
    } else {
      res.send("INCORRECT_LOGIN");
    }
  });
});
