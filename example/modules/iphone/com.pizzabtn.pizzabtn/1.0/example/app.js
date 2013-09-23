var PizzaButton = require('com.pizzabtn.pizzabtn');

// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

win.open();

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

