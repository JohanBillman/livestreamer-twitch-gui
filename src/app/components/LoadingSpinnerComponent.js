define([
	"Ember",
	"hbs!templates/components/loadingspinner.html"
], function(
	Ember,
	layout
) {

	return Ember.Component.extend({
		layout: layout,

		tagName: "svg",
		attributeBindings: [ "viewBox" ],
		classNames: [ "loading-spinner" ],

		viewBox: "0 0 1 1",

		_setRadiusAttribute: function() {
			var circle = this.element.querySelector( "circle" );
			var strokeWidth = window.getComputedStyle( circle ).strokeWidth;
			var radius = 50 - parseInt( strokeWidth, 10 );
			circle.setAttribute( "r", radius + "%" );
		}.on( "didInsertElement" )
	});

});
