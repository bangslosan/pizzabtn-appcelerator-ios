/*
 * A tabbed application, consisting of multiple stacks of windows associated with tabs in a tab group.  
 * A starting point for tab-based application with multiple top-level windows. 
 * Requires Titanium Mobile SDK 1.8.0+.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

var PizzaButton = require('com.pizzabtn.pizzabtn');

PizzaButton.addEventListener('pizzabtn:open', function(e) {
	Ti.API.info('PizzaBtn: open');
});
PizzaButton.addEventListener('pizzabtn:close', function(e) {
	Ti.API.info('PizzaBtn: close');
});
PizzaButton.addEventListener('pizzabtn:show', function(e) {
	Ti.API.info('PizzaBtn: show');
});
PizzaButton.addEventListener('pizzabtn:hide', function(e) {
	Ti.API.info('PizzaBtn: hide');
});
PizzaButton.addEventListener('pizzabtn:drag', function(e) {
	Ti.API.info('PizzaBtn: drag');
});
PizzaButton.addEventListener('pizzabtn:content:show', function(e) {
	Ti.API.info('PizzaBtn: content show');
});
PizzaButton.addEventListener('pizzabtn:content:hide', function(e) {
	Ti.API.info('PizzaBtn: content hide');
});
PizzaButton.addEventListener('pizzabtn:content:loading', function(e) {
	Ti.API.info('PizzaBtn: content loading');
});
PizzaButton.addEventListener('pizzabtn:content:loaded', function(e) {
	Ti.API.info('PizzaBtn: content loaded');
});
PizzaButton.addEventListener('pizzabtn:content:error', function(e) {
	Ti.API.info('PizzaBtn: content error' + e.error);
});
PizzaButton.addEventListener('pizzabtn:event', function(e) {
	Ti.API.info('PizzaBtn: event: ' + e.event + '; args: ' + e.args + ';');
});

// open HintButton
PizzaButton.open();

// This is a single context application with mutliple windows in a stack
(function() {
	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var Window;
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	}
	else {
		Window = require('ui/handheld/ApplicationWindow');
	}

	var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
	new ApplicationTabGroup(Window).open();
})();
