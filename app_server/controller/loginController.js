
module.exports.index = function (req, res) {
    res.render('login');
};

module.exports.indexPost = function (req, res) {
    console.log(req.body)
    res.render('login', {
        Username: req.body.Username,
        Password: req.body.Password
    });
};