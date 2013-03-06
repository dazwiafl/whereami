function WhereAmI(){
	var self = this;
	
	self.GeoLocation = new GeoLocationModel({callBack: function(){
		var pos = this.get("position");
		$.ajax({
			url: "https://api.foursquare.com/v2/venues/search",
			data:{
				ll: pos.toString(),
				radius: 500,
				v: '20130306',
				limit: 50,
				intent: 'checkin',
				client_id: 'FIXLSYUYMO404EC5HWKRK5EKFADA3L50DB5FCUR5F1S1BWCW',
				client_secret: 'U4R30RPUDTCH1P2AH50LKKFCIWCZWJY4J013LYOAN1RRR3Y5'
			},
			success: function(x){
				console.log("success", x);
				dump(x);
			},
			error: function(x){
				console.log("error", x);
			}
		});
	}});
	
	self.isActive = function(){
		if(!self.GeoLocation.get("active"))
			return false;
			
		return true;
	}		
};