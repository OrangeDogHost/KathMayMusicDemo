import express from 'express';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import bodyParser from 'body-parser';
import session from 'express-session';

const currDirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:false}));


app.get('/updatesite', (req, res) => {
    console.log(currDirname)
    res.sendFile(currDirname + "/gigform.html");
})


app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post('/formsubmit', (req, res) => {
    const eventDetails = {
        eventName: req.body.eventName,
        eventVenue: req.body.eventVenue,
        eventTime: req.body.eventTime,
        eventDate: req.body.eventDate,
        eventPrice: req.body.eventPrice,
        eventDescription: req.body.eventDescription
    }
    console.log(eventDetails);
    res.render('index.ejs', {eventDetails})
    
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})

// app.post('/formsubmit', (req, res) => {
//     const eventDetails = {
//       eventName: req.body.eventName,
//       eventVenue: req.body.eventVenue,
//       eventTime: req.body.eventTime,
//       eventDate: req.body.eventDate,
//       eventPrice: req.body.eventPrice,
//       eventDescription: req.body.eventDescription
//     };
//     console.log(eventDetails);
//     res.redirect(`/?eventName=${eventDetails.eventName}&eventVenue=${eventDetails.eventVenue}&eventTime=${eventDetails.eventTime}&eventDate=${eventDetails.eventDate}&eventPrice=${eventDetails.eventPrice}&eventDescription=${eventDetails.eventDescription}`);
//   });
  
//   app.get("/", (req, res) => {
//     const eventDetails = {
//       eventName: req.query.eventName,
//       eventVenue: req.query.eventVenue,
//       eventTime: req.query.eventTime,
//       eventDate: req.query.eventDate,
//       eventPrice: req.query.eventPrice,
//       eventDescription: req.query.eventDescription
//     };
//     res.render("index.ejs", { eventDetails });
//   });
