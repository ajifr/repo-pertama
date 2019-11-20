exports.home = function(req, res, next) {
    res.render('index', { title: 'Express Framework' });
};

exports.about = function(req, res, next) {
    res.render('about');
};

exports.contact = function(req, res, next) {
    res.render('contact');
};