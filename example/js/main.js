$(document).ready(function(){

	var app = new WhereAmI($('#container'));
	
	console.log(app.isActive());

/*	App.View.init();

	$(window)
		.focus(function() {
    		app.window_focus = true;
		})
		.blur(function() {
        	app.window_focus = false;
	    });
*/
});