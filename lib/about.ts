/*
* 
* A component is a class decorated with some metadata.
* Decorators are functions that can modify a class or decorate it with some metadata.
* A simple component that does not have any interaction will look like this:
*/
import { Component, Input } from "angular2/core";
/*
Event listeners
Event bindings can connect an event emitter of a tag or component to a method of a function.
Such binding is denoted with parenthesis in the template. We will add a show-more button to our application:
*/

/*
Adding conditions to the template
The event handler in the previous section sets the property collapsed to false but that does not modify the template.
In normal code, we would have written if (this.collapsed){ ... }. In templates, we cannot use that, but we can use ngIf.
Directives
A directive is an extension to normal HTML tags and attributes.
It can define custom behavior. A custom component, such as the About page, can be seen as a directive too.
The ngIf condition is a built-in directive in Angular.
It is a custom attribute that displays the content if the specified value is true.
The template tag
If a piece of a component needs to be shown a variable an amount of times,
you can wrap it in a template tag. Using the ngIf (or ngFor) directive,
you can control how often it is shown (in case of ngIf, once or zero times).
*/
@Component({
	selector: "about-page",
	template: `
		<h2>About</h2>
		This widget shows the weather forecast of
		<a [href]="'https://maps.google.com/?q=' + encodedLocation">
			{{ location }}
		</a>.
		The next 24 hours are shown under 'Today' and the forecast of 24-48 hours ahead under 'Tomorrow'.
		<br />
		<a *ngIf="collapsed" href="javascript:;" (click)="show()">Show more</a>
		<div *ngIf="!collapsed">
			The forecast uses data from <a href="http://openweathermap.org">Open Weather Map</a>.
			<br />
			<a href="javascript:;" (click)="hide()">Hide</a>
		</div>
		`
})
/*
One-way variable binding
In the first attempt of the about page, the location (Utrecht) is hardcoded. In the final
application, we want to choose our own location. The first step we will take is to add a
property to the class that contains the location. Using a one-way binding, we will reference
that value in the template. A one-way variable binding is denoted with brackets inside
attributes and double curly brackets inside text:
*/
export class About {
	@Input()
	location: string = "Utrecht";
	collapsed = true;
	show() {
		this.collapsed = false;
	}
	hide() {
		this.collapsed = true;
	}
/*
    The show() or hide() function will be called when one of the show or hide links is clicked
*/
	get encodedLocation() {
		return encodeURIComponent(this.location);
	}
}