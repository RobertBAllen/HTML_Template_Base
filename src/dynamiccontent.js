function ajaxpage(page, containerid){
	ajaxrequest(page, function(data) {
		document.getElementById(containerid).innerHTML = data;
	});
}

function ajaxtag(page, tagname) {
	ajaxrequest(page, function(data) {
		document.getElementByTagName(tagname).innerHTML = data;
	});
}

function ajaxrequest(page, onSuccess) {
	$.ajax( {
		type: 'GET',
		url: page,
		success: onSuccess
	});
}

function ajaxrequesttext(file, onSuccess) {
	$.ajax({
		type: 'GET',
		url: file,
		dataType:"text",
		success: onSuccess});
}

function fullajax(path, datatype, onSuccess) {
	$.ajax({
		type: 'GET',
		url: path,
		dataType: datatype,
		success: onSuccess});
}