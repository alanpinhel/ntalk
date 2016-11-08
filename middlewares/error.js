exports.notFound = function(req, res, next) {
  res.status(404);
  res.render('not-found.ejs');
};

exports.serverError = function(error, req, res, next) {
  res.status(500);
  res.render('server-error.ejs', {error: error});
};