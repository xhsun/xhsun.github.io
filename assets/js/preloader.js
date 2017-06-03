if (window.addEventListener) {// For all major browsers, except IE 8 and earlier
	window.addEventListener("load", function(){$("#preload").fadeOut("slow");});
} else if (window.attachEvent) {// For IE 8 and earlier versions
	window.attachEvent("load", function(){$("#preload").fadeOut("slow");});
}
