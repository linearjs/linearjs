var plugin = document.createElement("linear-plugin");
var content = document.createElement('linear-content');
content.innerHTML = `
	|ff Arial prp|
		|b
			|#
				Hey! Welcome to LinearJS.
			#|
		b|
		|3
			What the heck is LinearJS?
		3|
		LinearJS is a simple JavaScript library that makes coding a website a whole lot easier. Despite being somewhat limited currently, I'm going to be constantly developing this.
		|3
			What does the code look like?
		3|
		It looks like this
	ff|
`;
var lookslike = document.createElement("code");
lookslike.setAttribute("style", "background-color: light-gray;");
lookslike.innerHTML = `<br />
|b<br />
	|#<br />
		Hey! Welcome to LinearJS.<br />
	#|<br />
b|<br />
This is an example.<br />`
var contentb = document.createElement('linear-content');
contentb.innerHTML = `
|ff Arial prp|
and results in:
ff|
|b
|#
Hey! Welcome to LinearJS.
#|
b|
This is an example.
`;

document.body.appendChild(content);
document.body.appendChild(lookslike);
document.body.appendChild(contentb);
INITFONTS(plugin);