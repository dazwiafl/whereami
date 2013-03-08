FoursquareVenueModel = Backbone.Model.extend({
    defaults: {
   		canonicalUrl: '',
   		categories: [],
   		hereNow: {},
   		id: '',
   		likes: {},
   		name: '',
   		referralId: '',
   		restricted: true,
   		specials: {},
   		stats: {},
   		verified: false
	},
	
	initialize: function(){
	}
});