Accounts.onCreateUser(function(options, user) {
		user.profile = {};
    user.profile['match'] = [];
    user.profile['bash'] = [];

    return user;
});
