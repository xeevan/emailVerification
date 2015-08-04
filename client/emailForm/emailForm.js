Template.emailFormSignup.events({
	'submit #signupForm': function(eve,tem){
		eve.preventDefault();
		var input = {profile:{name:tem.find('#userName').value},email:tem.find('#userEmail').value,password:tem.find('#userPassword').value};
		email = tem.find('#userEmail').value;

		Accounts.createUser(input, function(err,res){
			if(err){
				console.log(err.reason);
			}
			else{
				console.log('Registration successful.....');
				Meteor.call('sendVerificationLink',email,Meteor.userId(),function(err,res){
					if(!err){
						console.log('An email verification link has been sent to your account....Click the link to verify.');
						Router.go('/checkYourEmail');
					}
					else{
						console.log(err.reason);
					}

				});	
			}
		});
	}
});

Template.emailFormLogin.events({
	'submit #loginForm': function(eve,tem){
		eve.preventDefault();
		var email = tem.find('#userEmail').value,
			password = tem.find('#userPassword').value;
		Meteor.loginWithPassword(email,password,function(err,res){
			if(!err){
				Router.go('/');
			}
			else{
				$('#logError').text(err.reason);
			}
		});
	}
});