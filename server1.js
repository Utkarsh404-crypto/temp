const express = require("express");
const app = express();
const initRoutes = require("./routes1/rou");



app.set('view engine', 'ejs')
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 8080;
app.listen(port, () => {
    console.log(`Running at localhost:${port}`);
});