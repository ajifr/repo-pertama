const express = require(`express`)
const app = express()
const port = 3005 //port application

//route/url aplication
app.get(`/`, (req, res) => {
    res,
    send(`hello world`)
})

//set run
app.listen(port, () => {
    console.log(`yeay! your app running on port ${port}!`)
})