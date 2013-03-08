var FoursquareCaptureVenueView = Backbone.View.extend({

	tagName: "li",
	
	className: "4sq-list-item",
	
	events: {
	},
	
	initialize: function() {
		var self = this;
		
		self.render();
	},
	
	render: function() {
	  var self = this;
	  
	  $(self.el).html(self.model.get("name"));
	}

});