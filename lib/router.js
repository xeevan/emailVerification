Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/',function(){
	if(Meteor.userId()){
		this.render('home');
	}
	else{
		this.render('emailFormSignup');
	}
});

Router.route('/signup',{
	template:'emailFormSignup'
});

Router.route('/login',{
	template: 'emailFormLogin'
});

Router.route('/checkYourEmail',{
	template: 'checkYourEmail'
});

Router.route('/emailverified',{
	template: 'emailVerified'
});
Router.route('/verifyEmail/:token',{
	controller: 'AccountController',
	action: 'verifyEmail'
});

AccountController = RouteController.extend({
	verifyEmail: function(){
		Accounts.verifyEmail(this.params.token, function(){
			Router.go('/emailverified');
		});
	}
});
