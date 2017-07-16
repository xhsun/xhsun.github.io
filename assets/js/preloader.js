if (window.addEventListener) {// For all major browsers, except IE 8 and earlier
	window.addEventListener("load", function(){
		$("#preload").fadeOut("slow");
		$('noscript.load-later').replaceWith(function(){
			return this.textContent || this.innerText;
		});
	});
} else if (window.attachEvent) {// For IE 8 and earlier versions
	window.attachEvent("load", function(){
		$("#preload").fadeOut("slow");
		$('noscript.load-later').replaceWith(function(){
			return this.textContent || this.innerText;
		});
	});
}
