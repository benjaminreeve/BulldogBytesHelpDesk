const nodemailer = require("nodemailer")

const express = require("express")
const app = express()
const _port = 8000
app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => res.send('Heyyyyy'))

var transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sullivanwest.helpdesk@gmail.com',
    pass: 'sullivanwest'
  }
})

app.post('/teachers', (req, res) => {
  let name = req.body.name;
  let request = req.body.request;
  let details = req.body.details;
  let type = req.body.type;
  let freePeriod = req.body.freePeriod;

  console.log(name);

  const mailOptions = {
    from: 'sullivanwest.helpdesk@gamil.com',
    to: 'benjaminreeve64@gmail.com',
    subject: `teacher request for ${type} from ${name}: ${request}`,
    html: `
      <h3>${request}</h3>
      <p> ${details}  </p>
      <p>free period: ${freePeriod} </p>`
  }

  transport.sendMail(mailOptions, (err, info) => {
    if(err)
      console.log(err)
    else
      console.log(info);
  })
  res.send(200);
})

app.post('/students', (req, res) => {
  let name = req.body.name;
  let grade = req.body.grade;
  let type = req.body.type;
  let teacher = req.body.teacher;
  let email = req.body.email;
  let request = req.body.request;
  let details = req.body.details;

  console.log(name);

  const mailOptions = {
    from: 'sullivanwest.helpdesk@gmail.com',
    to: 'benjaminreeve64@gmail.com',
    subject: `student request for ${type} from ${name}: ${request} `,
    html: `
      <ul>
        <li> Student Name: ${name}</li>
        <li> Grade: ${grade}</li>
        <li> Teacher: ${teacher}</li>
        <li> email: ${email}</li>
      </ul>

      <h3>${request}</h3>
      <p>${details}</p>`
  }

  transport.sendMail(mailOptions, (err, info) => {
    if(err)
      console.log(err)
    else
      console.log(info);
  })
  res.send(200);

})



app.listen(_port, () => { console.log(`server istening on port: ${_port}!`)})
