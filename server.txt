import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

let gigs = [];

app.get('/form', (req, res) => {
    const formPath = path.join(__dirname, 'gigform.html');
    res.sendFile(formPath);
})

app.post('/form-submit', (req, res) => {

    let gigValues = {};

    gigValues.gigName = req.body.eventName;
    gigValues.gigVenue = req.body.eventVenue;
    gigValues.gigTime = req.body.eventTime;
    gigValues.gigPrice = req.body.eventPrice;
    gigValues.gigDate = req.body.eventDate;

    gigs.push(gigValues);

    gigs.forEach(gig => {
        console.log(gig);
    })
    
})



app.listen(port, () => {
    console.log("Listening on port 3000")
})