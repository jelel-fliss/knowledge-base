const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();

var uniqid = require("uniqid");

app.listen(8000, () => {
  console.log("Server running on port 8000");
});

app.use(cors());
app.use(bodyParser.json());

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

/*
const accessTokenSecret = "AvAxIa333";

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
      const token = authHeader.split(" ")[1];

      jwt.verify(token, accessTokenSecret, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }

          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
};*/

app.get("/problems", (req, res) => {
  let sql = "SELECT * From Problems ORDER BY PostTime DESC;";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

// Treatement

app.get("/problem/name/:name", (req, res) => {
  const name = req.params.name;
  let sql =
    "SELECT * From Problems WHERE Name LIKE '%" +
    name +
    "%' ORDER BY PostTime DESC;";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

app.get("/problem/:id", (req, res) => {
  const id = req.params.id;
  let sql =
    "SELECT * From Problems WHERE ID = " + id + " ORDER BY PostTime DESC";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/problemcomments/:id", (req, res) => {
  const id = req.params.id;
  let sql =
    "SELECT * From Comments WHERE Problem_ID = " +
    id +
    " ORDER BY is_Solution DESC, PostTime ASC;";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

//nQ,AjgwG2rTGdj&:
//SELECT Comments.ID,Comments.Content,Comments.PostTime,Comments.Poster_ID,Comments.Problem_ID,Users.Name,Users.Prename FROM `Comments`,Users WHERE Comments.Poster_ID=Users.ID

app.get("/comments", (req, res) => {
  var arr = req.query.array;
  var sqlarray = arr.toString();
  sqlarray = sqlarray.substring(1);
  sqlarray = sqlarray.substring(0, sqlarray.length - 1);
  let sql =
    "SELECT Comments.ID,Comments.Content,Comments.PostTime,Comments.Poster_ID,Comments.Problem_ID,Users.Name,Users.Prename FROM `Comments`,Users WHERE Comments.Poster_ID=Users.ID AND Comments.Problem_ID IN (" +
    sqlarray +
    ");";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/problems/number", (req, res) => {
  let sql = "SELECT COUNT(*) as count FROM Problems;";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/problems/pagination/:offset", (req, res) => {
  const offset = req.params.offset;
  let sql =
    "SELECT * FROM Problems ORDER BY PostTime DESC LIMIT 5 OFFSET " +
    offset +
    ";";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Posting comment

app.post("/commentOnProblem", (req, response) => {
  const comment = ({
    username,
    userprename,
    userID,
    problemID,
    content
  } = req.body);

  description = username + " " + userprename + " Commented on a problem.";

  commentID = uniqid();
  //console.log("commentID :" + commentID);
  let addingCommentSQL =
    'INSERT INTO `Comments` VALUES("' + commentID +'","' + comment.content +
    '",NOW(),' + comment.userID + ',' + comment.problemID +',0);';
  //console.log(addingCommentSQL);
  connection.query(addingCommentSQL, (err, res1) => {
    if (err) throw err;
  });

  let AddEvent = 'INSERT INTO `Events` VALUES("' + uniqid() + '","comment","' +
      description + '","' + commentID +'");';
  //console.log(AddEvent);
  connection.query(AddEvent, (err, res) => {
    if (err) throw err;
  });

  let Users_to_notify_sql = 'SELECT User_ID FROM Follows WHERE Problem_ID = ' + comment.problemID +' ;';
  //console.log(Users_to_notify_sql);
  connection.query(Users_to_notify_sql, (err, users)=>{
    if (err) throw err;
    let i = 0;
    for ( i ; i < users.length ; i++){
      if (users[i].User_ID!=comment.userID){
        let NotifySQL = 'INSERT INTO Notifications VALUES("'+uniqid()+'", '+ users[i].User_ID +' ,'+ comment.userID +',0);';
        //console.log(NotifySQL);
        connection.query(NotifySQL, (err, res)=>{
          if (err) throw err;
        });
      }
    }
    response.send(users);
  })



});

app.post("/postProblem", (req, response) => {
  const problem = ({ userID, name, subject, content } = req.body);

  var problemID = 0;
  let sql = " SELECT MAX(ID) as maxID From Problems;";

  connection.query(sql, (err, results) => {
    if (err) throw err;

    problemID = results[0].maxID + 1;
    console.log("problemID :" + problemID);
    let uploadProblemSQL =
      " INSERT INTO Problems VALUES(" +
      problemID +
      ',"' +
      problem.name +
      '","' +
      problem.content +
      '",NOW(),"' +
      problem.subject +
      '",' +
      problem.userID +
      ",0,0);";
    connection.query(uploadProblemSQL, (err, res) => {
      if (err) throw err;
      console.log("Problem Uploaded");
      response.send(res);
      response.end();
    });
  });
});

// Follow

app.put("/follow/:userID/:problemID", (req, response) => {
  userID = req.params.userID;
  problemID = req.params.problemID;

  let sql =
    'INSERT INTO Follows VALUES("' +
    uniqid() +
    '",' +
    userID +
    "," +
    problemID +
    ");";
  connection.query(sql, (err, res) => {
    if (err) throw err;
    console.log("User Follow Update !");
    response.send(res);
  });
});

// Unfollow

app.delete("/unfollow/:userID/:problemID", (req, response) => {
  userID = req.params.userID;
  problemID = req.params.problemID;

  let sql =
    "DELETE FROM Follows WHERE User_ID = " +
    userID +
    " AND Problem_ID = " +
    problemID +
    ";";
  connection.query(sql, (err, res) => {
    if (err) throw err;
    console.log("User Unfollowed A Problem.");
    response.send(res);
  });
});

app.get("/checkifFollowed/:userID/:problemID", (req, response) => {
  userID = req.params.userID;
  problemID = req.params.problemID;

  let sql =
    "SELECT * From `Follows` WHERE User_ID = " +
    userID +
    " AND Problem_ID = " +
    problemID +
    ";";
  connection.query(sql, (err, res) => {
    if (err) throw err;
    response.send(res);
  });
});


app.put("/marksolution/:problemID/:commentID", (req, response) => {
  prbID = req.params.problemID;
  cmtID = req.params.commentID;
  var username;
  var userprename;

  let MarkComment_sql =
    " UPDATE Comments SET is_Solution = 1 WHERE ID = " + cmtID + ";";
  connection.query(MarkComment_sql, (err, res1) => {
    if (err) throw err;
  });
  let MarkProblem_sql =
    "UPDATE Problems SET State = 1 WHERE ID = " + prbID + ";";
  connection.query(MarkProblem_sql, (err, res2) => {
    if (err) throw err;
  });

  let SolutionOwner =
    "SELECT Name, Prename From Users, Comments WHERE Users.ID = Comments.Poster_ID AND Comments.ID = " +
    cmtID +
    ";";

  connection.query(SolutionOwner, (err, rows) => {
    if (err) throw err;
    username = rows[0].Name;
    userprename = rows[0].Prename;

    description =
      userprename +
      " " +
      username +
      " Found A Solution to A Problem You are following !";
    console.log(description);

    let AddEvent =
      'INSERT INTO `Events` VALUES("' +
      uniqid() +
      '","solution","' +
      description +
      '",' +
      cmtID +
      ");";
    connection.query(AddEvent, (err, res2) => {
      if (err) throw err;
      response.send(res2);
      response.end();
    });
  });
});
