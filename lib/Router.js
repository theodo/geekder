Router.route('/', function () {
  this.render('main');
});

Router.route('/login', function () {
  this.render('sign-in');
});
