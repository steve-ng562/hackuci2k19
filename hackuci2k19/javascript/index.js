//ON SEARCH////////////////////////////////////////////////////////////////////////////////////////////////////////////
$( "#searchClicked" ).click(function(){


	var inputText = $("#search").val();
	var url = new URL(inputText);
	console.log(url.searchParams.get("v"));
	window.location.replace('/hackuci2k19/main.html?id=' + url.searchParams.get("v"));
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////