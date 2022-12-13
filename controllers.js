const getHome = (req, res, next) => {
    res.render('home');
}

const queryPost = (req, res, next) => {
    const { author, postTitle } = req.body; //  These are details of post queried from frontend

    // Your code here to handle query

    res.redirect('/');
}

const addPost = (req, res, next) => {
    const { author, postTitle, body } = req.body; //  These are details of post added from frontend

    // Your code here to add post

    res.redirect('/');
}

module.exports = {
    getHome,
    queryPost,
    addPost
};