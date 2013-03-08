FoursquareInteractionModel = Backbone.Model.extend({
    defaults: {
   		errorCode: "",
   		api_url: 'https://api.foursquare.com/v2/',
   		client_id: 'FIXLSYUYMO404EC5HWKRK5EKFADA3L50DB5FCUR5F1S1BWCW',
		client_secret: 'U4R30RPUDTCH1P2AH50LKKFCIWCZWJY4J013LYOAN1RRR3Y5'
	},
	
	initialize: function(){
	},
	
	captureVenues: function(pos, callback){
		var self = this;
		
		$.ajax({
			url: self.get("api_url") + "venues/search",
			data:{
				ll: pos.toString(),
				radius: 500,
				v: '20130306',
				limit: 50,
				intent: 'checkin',
				client_id: self.get("client_id"),
				client_secret: self.get("client_secret")
			},
			success: function(x){
				var fsvc = new FoursquareVenueCollection(); 
				_.each(x.response.venues, function(ele){
					var fsvm = new FoursquareVenueModel(ele);
					fsvc.push(fsvm);
				});
				callback('4sq_capture', fsvc);
			},
			error: function(x){
				callback(null);
			}
		});
	}
});