Meteor.startup(function () {
  Accounts.emailTemplates.from = 'emailverificationtest <no-reply@emailverificationtest.com>';

  Accounts.emailTemplates.siteName = 'Email Verification Test';
});

Accounts.urls.verifyEmail = function(token){
  return Meteor.absoluteUrl('verify-email/'+token);
}


Meteor.methods({
	sendVerificationLink: function(email,id){
		Accounts.sendVerificationEmail(id,email);
	}
});