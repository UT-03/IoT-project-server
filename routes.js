const express = require("express");
const { getHome, queryPost, addPost } = require("./controllers");

const router = express.Router();

router.get('/', getHome);

router.post('/query', queryPost);

router.post('/add', addPost);

module.exports = router;