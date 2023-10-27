require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// credentials for database
const db = new Pool({
  user: process.env.POSTGRES_USERNAME,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  ssl: true,
});

// Connecting to database
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database !");
});

app.get("/", (req, res) => {
  res.status(200).json("Hello World!");
});

// This endpoint is used to get all the sessions

app.get("/sessions", (req, res) => {
  db.query(
    `SELECT TO_CHAR(date, 'DD-MM-YYYY') AS formatted_date,
       TO_CHAR(date, 'Day') AS day, s.id as session_id ,
       session_type, b.id AS booking_id, b.volunteer_id  AS volunteer_id,
       v.first_name AS volunteer_first_name, v.last_name as volunteer_last_name
      FROM sessions s 
      LEFT JOIN bookings b ON (s.id = b.session_id)
      FULL OUTER JOIN volunteers v ON (b.volunteer_id = v.id)
      ORDER BY date, session_type desc;`
  )
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.log(error.message);
      res.status(500).send("Database Error");
    });
});

// This endpoint is used to get all the volunteers

app.get("/volunteers", (req, res) => {
  db.query(`SELECT * FROM volunteers;`)
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.log(error.message);
      res.status(500).send("Database Error");
    });
});

// This endpoint is used to get all the bookings

app.get("/bookings", (req, res) => {
  db.query(`SELECT * FROM bookings;`)
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.log(error.message);
      res.status(500).send("Database Error");
    });
});

// This endpoint is used to create a new booking

app.post("/bookings/create", (req, res) => {
  const volunteerId = req.body.volunteer_id;
  const sessionId = req.body.session_id;
  db.query(
    `INSERT INTO bookings (session_id, volunteer_id)
              VALUES ($1, $2);`,
    [sessionId, volunteerId]
  )
    .then((result) => res.send(result.rows[0]))
    .catch((error) => {
      console.log(error.message);
      res.status(500).send("Database Error");
    });
});

// This endpoint is used to cancel an existing booking

app.delete("/bookings/:id", (req, res) => {
  const bookingId = Number(req.params.id);
  db.query(
    `DELETE FROM bookings 
            WHERE id=$1;`,
    [bookingId]
  )
    .then(() => res.send(`Booking with ID ${bookingId} is deleted`))
    .catch((error) => {
      console.log(error.message);
      res.status(500).send("Database Error");
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
