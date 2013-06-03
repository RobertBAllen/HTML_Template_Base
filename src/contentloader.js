// JavaScript Document
var params = [];
function loadpage(pagename) {
	$.ajax({ type:'GET',
		url: pagename,
		dataType:"html",
		crossDomain: true,
		cache: false,
		success: function(data) {
			$(data).each(function(index, element) {
				if (typeof $(element).attr("id") === 'undefined') {
					return;
				}
                if ($(element).attr("id") == "globalLink") {
					shuntMenus();
				}
				$("#" + $(element).attr("id")).html($(element).html());
				if ($(element).attr("id") == "globalLink") {
					reloadMenus();
				}
				if ($(element).attr("id") == "pageName") {
					var t = $(element).find("#pageNameHeader")[0].innerHTML;
					document.title = t;
				}
            });
		}});
	loadScriptsFromPage(pagename);
}
function loadScriptsFromPage(pagename) {
	$.ajax({
		url: pagename,
		type: 'GET',
		cache: false,
		crossDomain: true,
		success: function(data) {
			$(data).find("script").each(function(index, element) {
                $('head').append(element);
            });
		}
	});
}

function shuntMenus() {
	menuitem1 = null;
	menuitem2 = null;
	menuitem3 = null;
	menuitem4 = null;
	menuitem5 = null;
	menuitem6 = null;
	menuitem7 = null;
}
function reloadMenus() {
	menuitem1 = new menu(7,1,"hidden");
    menuitem2 = new menu(7,2,"hidden");
    menuitem3 = new menu(7,3,"hidden");
    menuitem4 = new menu(7,4,"hidden");
    menuitem5 = new menu(7,5,"hidden");
    menuitem6 = new menu(7,6,"hidden");
    menuitem7 = new menu(7,7,"hidden");
}
function getUrlVars() {
	var vars = [], hash;
	var start = window.location.href.indexOf('?') + 1, end = window.location.href.indexOf('#');
	var hashes = window.location.href.slice(start, (end > 0) ? end : window.location.href.length).split('&');
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}

function tryParams() {
	var page = params["page"];
	if (keyExists(params, "page")) {
		loadpage(page);
	}
}

function keyExists(array, key) {
	var v = array[key];
    if (typeof v === 'undefined') {
		return false;
	}
	return true;
}

function gotopage(page) {
	var base = [window.location.protocal, '//', window.location.host, window.location.pathname].join('');
	var url = base + "?page=" + page;
	window.location.href = url;
}

function resetpage() {
	var base = [window.location.protocal, '//', window.location.host, window.location.pathname].join('');
	window.location.href = base;
}

function scrollToId(container) {
	var element = document.getElementById(container);
	if (typeof element === 'undefined' || element == null) {
		return;
	}
	window.scrollTo(element.offsetLeft, element.offsetTop);	
}