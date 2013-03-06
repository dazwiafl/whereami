PositionModel = Backbone.Model.extend({
    defaults: {
    	lat: null,
    	long: null
	},
	
	toInfoString: function(){
		var self = this;
		return "lat: "+self.get("lat")+"; long: "+self.get("long");
	},
	
	toString: function(){
		var self = this;
		return self.get("lat")+","+self.get("long");
	}

});