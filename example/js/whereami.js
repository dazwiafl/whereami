function WhereAmI($el){
	var self = this;
	
	self._$mainView = $el;
	
	self.FoursquareInteraction = new FoursquareInteractionModel();
	self.GeoLocation = new GeoLocationModel({callBack: function(){
		var pos = this.get("position");
		if(!pos)
			return;
			
		self.initializeCapturing(pos);
	}});
	
	self.isActive = function(){
		if(!self.GeoLocation.get("active"))
			return false;
			
		return true;
	};
	
	self.initializeCapturing = function(pos){
		self.FoursquareInteraction.captureVenues(pos, self.initializeView);
	};
	
	self.initializeView = function(type, model){
		self._$mainView.empty();
		var view = null;
		switch(type){
			case "4sq_capture": view = new FoursquareCaptureView({collection:model}); break;
		}
		
		if(!view)
			return;
			
		self._$mainView.append(view.$el);
	};
};