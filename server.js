const express = require("express");
const router = require("./routes");
const bodyParser = require('body-parser');

const PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(router);

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}...`);
});
