Template.layout.events({
	'click #logout': function(eve,tem){
		eve.preventDefault();
		Meteor.logout(function(err,res){
			if(!err){
				Router.go('/');
			}
		});
	}
});