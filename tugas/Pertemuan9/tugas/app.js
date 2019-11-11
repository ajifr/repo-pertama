let http = request(`http`);
let fs = require(`fs`);

let port = 3003
let hostname = '127.0.0.1'
let server = http.createServer((req, res) => {
    if (req.url === `/` || req.url === `/home`) {
        res.statuscode = 200
        res.setHeader(`content-type`, `text/html`)
        fs.createReadStream(`index.html`).pipe(res);
    } else if (req.url === `/about`) {
        res.statuscode = 200
        res.setHeader(`about.html`).pipe(res);
    } else if (req.url === `/my`) {
        console.log(req.params)
        res.statuscode = 200
        res.setHeader(`content-type`, `text/html`)
        fs.createReadStream(`profile.html`).pipe(res);
    } else {
        res.statuscode = 404
        res.setHeader(`content-type`, `text/html`)
        fs.createReadStream(`404.html`).pipe(res);

    }
});