function initialise() {
	var icons = document.getElementsByClassName("nav_icon");
	icons[0].style.backgroundColor = "#343434";
	var children = document.getElementsByClassName("handling_items");
	children[0].style.display = "block";
	mouseEvent()
}

// Click any of the icons (currently red square placeholders) and reveal the corresponding div of text

function mouseEvent() {
	var icons = document.getElementsByClassName("nav_icon");
	for (var i = 0; i < icons.length; i++) {
		icons[i].onclick = function() { showItem(this) };
	}
}

function showItem(e) {
	// Also hides all other nodes
	var icons = document.getElementsByClassName("nav_icon");
	var children = document.getElementsByClassName("handling_items");
	for (var j = 0; j < children.length; j++) {
		// Comparing the id of the clicked icon with the ids of the elements in "children"
		if(e.id == children[j].id){
			// Revealing the clicked node
			children[j].style.display = "block";
			icons[j].style.backgroundColor = "#343434";
		} else {
			// Hiding nodes that weren't clicked
			children[j].style.display = "none";
			icons[j].style.backgroundColor = "#888888";
		}
	}
}


