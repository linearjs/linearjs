function INITFONTS(plugin) {
	plugin.implements(
		[
			function(contentEle) {
				contentEle.innerHTML = contentEle.innerHTML.replace(/\|ff/g, "<font face=\"").replace(/prp\|/g , "\">").replace(/ff\|/g, "</font>");
			}
		]
	);
	plugin.runImplements(content);
	content.parse();
}
