function ApplicationWindow(title) {
	var PizzaButton = require('com.pizzabtn.pizzabtn');
	
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('openWindow'),
		top:20
	});
	self.add(button);
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(Ti.UI.createWindow({
			title: L('newWindow'),
			backgroundColor: 'white'
		}));
	});
	
	var openButton = Ti.UI.createButton({
		top:56,
		left:8,
		height:44,
		width:100,
		title:L('open')
	});
	openButton.addEventListener('click', function() {
		PizzaButton.open();
	});
	self.add(openButton);
	
	var closeButton = Ti.UI.createButton({
		top:56,
		right:8,
		height:44,
		width:100,
		title:L('close')
	});
	closeButton.addEventListener('click', function() {
		PizzaButton.close();
	});
	self.add(closeButton);
	
	var showButton = Ti.UI.createButton({
		top:104,
		left:8,
		height:44,
		width:100,
		title:L('show')
	});
	showButton.addEventListener('click', function() {
		PizzaButton.show();
	});
	self.add(showButton);
	
	var hideButton = Ti.UI.createButton({
		top:104,
		right:8,
		height:44,
		width:100,
		title:L('hide')
	});
	hideButton.addEventListener('click', function() {
		PizzaButton.hide();
	});
	self.add(hideButton);
	
	var showHintButton = Ti.UI.createButton({
		top:152,
		left:8,
		height:44,
		width:100,
		title:L('show hint')
	});
	showHintButton.addEventListener('click', function() {
		PizzaButton.showHint();
	});
	self.add(showHintButton);
	
	var hideHintButton = Ti.UI.createButton({
		top:152,
		right:8,
		height:44,
		width:100,
		title:L('hide hint')
	});
	hideHintButton.addEventListener('click', function() {
		PizzaButton.hideHint();
	});
	self.add(hideHintButton);
	
	var showContentButton = Ti.UI.createButton({
		top:200,
		left:8,
		height:44,
		width:100,
		title:L('show content')
	});
	showContentButton.addEventListener('click', function() {
		PizzaButton.showContent();
	});
	self.add(showContentButton);
	
	var hideContentButton = Ti.UI.createButton({
		top:200,
		right:8,
		height:44,
		width:100,
		title:L('hide content')
	});
	hideContentButton.addEventListener('click', function() {
		PizzaButton.hideContent();
	});
	self.add(hideContentButton);
	
	return self;
};

module.exports = ApplicationWindow;
