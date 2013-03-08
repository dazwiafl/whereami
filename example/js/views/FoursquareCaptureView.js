var FoursquareCaptureView = Backbone.View.extend({

	tagName: "ul",
	
	className: "4sq-list",
	
	events: {
		/*"click .icon":          "open",
		"click .button.edit":   "openEditDialog",
		"click .button.delete": "destroy"*/
	},
	
	initialize: function() {
		var self = this;
		
		/*this.listenTo(this.model, "change", this.render);*/
		self.__itemViews = [];
		
		this.collection.each(function(item){
			self.__itemViews.push(new FoursquareCaptureVenueView({
				model: item
			}));
		});
		self.render();
	},
	
	render: function() {
	  var self = this;
	  
	  _(self.__itemViews).each(function(itemView){
	  	itemView.render();
		$(self.el).append(itemView.el);
	  });
	}

});