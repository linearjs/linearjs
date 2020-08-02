class LinearPlugin extends HTMLElement {
	constructor() {
		super();
		this.implement = [];
	}
	connectedCallback() {
		console.log("LinearPlugin tag recognized.");
	}
	implements(funcs) {
		this.implement = funcs;
	}
	runImplements(contentTag) {
		var li = this.implement;
		var x = 0;
		while (x < li.length) {
			console.log("Implementing plugins " + "(" + (parseInt(x) + 1) + "/" + li.length + ")");
			li[x](contentTag);
			x++;
		}
		console.log("done");
	}
}
function runImplements(li) {
	for (var i = 0; i > li.length; i++) {
		li[x](contentEle.innerHTML);
	}
}
class LinearElement extends HTMLElement {
	constructor() {
		super();
	}
	parse() {
		console.log("%c INFO: Powered by Linearwiki!", "background: cyan; color: black; font-weight: bold;")
		this.innerHTML = this.innerHTML.replace(/\|b/g, "<b>");
		this.innerHTML = this.innerHTML.replace(/b\|/g, "</b>");

		for (var i = 6; i > 0; i--) {
			this.innerHTML = this.innerHTML.replace(new RegExp("\\|" + "#".repeat(i), "g"), "<h" + i + ">");
			this.innerHTML = this.innerHTML.replace(new RegExp("#".repeat(i) + "\\|", "g"), "</h" + i + ">");

			this.innerHTML = this.innerHTML.replace(new RegExp("\\|" + i, "g"), "<h" + i + ">");
			this.innerHTML = this.innerHTML.replace(new RegExp(i + "\\|", "g"), "</h" + i + ">");
		}
		this.innerHTML = this.innerHTML.replace(/\|nl\|/g, "<br />");
	}
	connectedCallback() {
		this.implement = []
		this.parse();
	}

	get content() {
		return this.innerHTML;
	}
	set content(cont) {
		this.innerHTML = cont;
	}
}
function parse(ele) {
	console.log(("%c INFO: Powered by Linearwiki!", "background: cyan; color: black; font-weight: bold;"));
	ele.innerHTML = ele.innerHTML.replace(/\|b/g, "<b>");
	ele.innerHTML = ele.innerHTML.replace(/b\|/g, "</b>");

	for (var i = 6; i > 0; i--) {
		ele.innerHTML = ele.innerHTML.replace(new RegExp("\\|" + "#".repeat(i), "g"), "<h" + i + ">");
		ele.innerHTML = ele.innerHTML.replace(new RegExp("#".repeat(i) + "\\|", "g"), "</h" + i + ">");

		ele.innerHTML = ele.innerHTML.replace(new RegExp("\\|" + i, "g"), "<h" + i + ">");
		ele.innerHTML = ele.innerHTML.replace(new RegExp(i + "\\|", "g"), "</h" + i + ">");
	}
	//ele.innerHTML = ele.innerHTML.replace("|#", "<h1>");
	//ele.innerHTML = ele.innerHTML.replace("#|", "</h1>");

	ele.innerHTML = ele.innerHTML.replace(/\|nl\|/g, "<br />");
}
window.customElements.define("linear-content", LinearElement);
window.customElements.define("linear-plugin", LinearPlugin);