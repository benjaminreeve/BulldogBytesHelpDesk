const nodemailer = require("nodemailer")

const express = require("express")
const app = express()
const _port = 8000
app.use(express.json())

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
    from: 'sullivanwest.helpdesk@gail.com',
    to: 'benjaminreeve64@gmail.com',
    subject: `teacher request for ${type} from ${name}: ${request}`,
    html: `<p> ${details}  </p>
        <p>free period: ${freePeriod} </p>`
  }

  transport.sendMail(mailOptions, (err, info) => {
    if(err)
      console.log(err)
    else
      console.log(info);
  })
  res.send('success');
})



app.listen(_port, () => { console.log(`server istening on port: ${_port}!`)})
