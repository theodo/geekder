Router.configure({
	layoutTemplate: "homePage"
});

Router.route('/', {
	name: "app",
	template: "app"
}); 

Router.route('/login', function () {
  this.render('sign-in');
});

Router.route('/profile', function () {
  this.render('profile');
});

Router.plugin('ensureSignedIn', {
	only: ['app', 'profile']
});

