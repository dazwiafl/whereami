GeoLocationModel = Backbone.Model.extend({
    defaults: {
    	active:false,
    	position: null,
    	errorCode: "",
    	callBack: null
	},
	
	initialize: function(){
		var self = this;
		
		if(!navigator.geolocation){
			self.set(errorCode, "no navigator.geolocation");
			return;
		}
			
		self.set("active", true);
		self.getCurrentPosition();
	},
	
	getCurrentPosition: function(){
		var self = this;
		navigator.geolocation.getCurrentPosition(function(position){
			self.set("position", new PositionModel({lat: position.coords.latitude, long:position.coords.longitude}));
			self.callBackWhenReady();
		},
		function(position){
			self.set("errorCode", "no Position given");
			self.callBackWhenReady();
		});
	},
	
	callBackWhenReady: function(){
		var self = this,
			cb = self.get("callBack"); 
		
		if(cb)
			cb.call(self);
	}
});