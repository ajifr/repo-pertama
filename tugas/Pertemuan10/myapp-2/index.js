const express = require(`express`)
const app = express()
const port = 3007 //port application

//setup template engine EJS
app.set(`view engine`, `ejs`)

//serve static file (Membuat Gambar dan File lainnya terbaca)
app.use('/assets', express.static('assets'))

//index page
app.get(`/`, (req, res) => {
    //res.send(`Home Page (edit)`)
    res.render(`index`)
})

//about page
app.get(`/about`, (req, res) => {
    //res.send(`About Page`)
    res.render(`about`)
})

//contact page
app.get(`/contact`, (req, res) => {
    //res.send(`Contact Page`)
    res.render(`contact`)
})

//profile page
//http://localhost:3006/profile?name=ajifr
app.get(`/profile`, (req, res) => {
    //res.send(`Profile Page`)
    let myJobs = [`Freelancer`, `Mentor`, `Penulis`]
        //console.log(req.query.name)
    res.render(`profile`, {
        data: req.query,
        jobs: myJobs
    })
})

//Artcile page
app.get(`/article`, (req, res) => {
    //res.send(`Article Page`)
    res.render(`article`)
})

//set run
app.listen(port, () => {
    console.log(`yeay! your app running on port ${port}!`)
})