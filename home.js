function initialise(){

	var expandImage = document.getElementsByClassName("imageExpand");
	for(i = 0; i < expandImage.length; i++){
		expandImage[i].style.display = "none";
	}
	expandImage[0].style.display="inline";
	imageClick();

}

function imageClick(){

	var parentImage = document.getElementsByClassName("imageThumbnail");
	console.log(parentImage);
	var expandImage = document.getElementsByClassName("imageExpand");
	console.log(expandImage);
	
	for(i = 0; i < parentImage.length; i++){
		parentImage[i].setAttribute("onmouseover", "opacity(this)")
		parentImage[i].setAttribute("onmouseout", "opacityUndo(this)")
		parentImage[i].setAttribute("onclick", "expandVisible(this)")
	}
}

function opacity(elem){

	elem.setAttribute("style","opacity: 1.0");
}

function opacityUndo(elem){

	var parentImage = document.getElementsByClassName("imageThumbnail");
	for(i=0; i < parentImage.length; i++){
		elem.setAttribute("style","opacity: 0.4");
	}
}

function expandVisible(elem){

	var parentImage = document.getElementsByClassName("imageThumbnail");
	var expandImage = document.getElementsByClassName("imageExpand");
	for(i = 0; i<parentImage.length; i++){
		if(elem == parentImage[i]){

			console.log(elem);
			console.log(parentImage[i]);
			expandImage[i].style.display="inline";
		}
		else{

			expandImage[i].style.display="none";			
		}
	}
}
