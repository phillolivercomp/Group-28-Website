function initialise()
{
	/*
	// Attach events to images
	var paragraphs = document.getElementsByClassName("story");
	for (var i = 0; i < paragraphs.length; i++) {
			var img = paragraphs[i].getElementsByTagName("img")[0];
			//img.setAttribute("onclick", "imgClicked(this);");
			img.onclick = function() { imgClicked(this); };
	}
	*/
	
	$("div#normaltext .story > img").click(function() { $(this).parent().find("p").fadeToggle("slow"); });
	
	var refresh = document.getElementById("refresh");
	
	// Attach to "refresh button"
	refresh.onclick = function() { requestData("news.xml", doRefresh); }
}

/*
// Toggle visibility of associated paragraph when the img is clicked
function imgClicked(img)
{
	// Get the para
	var div = img.parentNode;
	var para = div.getElementsByTagName("p");
	for (var i = 0; i < para.length; i++) {
		var parts = div.getElementsByTagName("p")[i];
		// Toggle state of CSS 'display' property
		if (parts.style.display === "block") {
			parts.style.display = "none";
		} else {
			parts.style.display = "block";
		}
	}
}
*/

function doRefresh(xmlhttp)
{
	// Get XML document
	var xmlDoc = xmlhttp.responseXML;

	// Get and empty list
	//var items = document.getElementsByClassName("stories");
	var item = document.getElementsByClassName("story")[0];
	while (item.firstChild) {
		item.removeChild(item.firstChild);
	}
	
	// Extract news stories from XML, and add to list
	var art = xmlDoc.getElementsByTagName("article");
	for (var i = 0; i < art.length; i++) {
		var lines = art[i].getElementsByTagName("line");
		var image = art[i].getElementsByTagName("image")[0].firstChild;
		console.log(image);
		var datesource = art[i].getElementsByTagName("datesource")[0].firstChild.data;
		console.log(datesource);
		for (var j = 0; j < lines.length; j++) {
			var line = art[i].getElementsByTagName("line")[j].firstChild.data;
			console.log(line);
		}
		var source = art[i].getElementsByTagName("source")[0].firstChild;
		console.log(source);

		item.appendChild(createArticleItem(image, datesource, line, source));
	}
}

function createArticleItem(image, datesource, line, source)
{
		var newArt = document.createElement("newArt");
		newArt.appendChild(createArticleItem("image", image));
		newArt.appendChild(createArticleItem("datesource", datesource));
		newArt.appendChild(createArticleItem("line", line));
		newArt.appendChild(createArticleItem("source", source));
		return newArt;
}

function createArticleItem(className, text)
{
		var para = document.createElement("para");
		para.className = className;
		para.appendChild(document.createTextNode(text));
		return para;
}
