function initialise(){
	var image1 = document.getElementById("viz");
	image1.setAttribute("onclick","changeimage(this)");
	var image2 = document.getElementById("annon");
	image2.setAttribute("onclick","changeimage(this)");
	var types = document.getElementsByClassName("type");
	for(var i=0;i<types.length;i++)
	{
		types[i].style.display = "none";
	}
	var menu = document.getElementById("menu");
	var items = menu.getElementsByTagName("li");
	for(var i = 0; i< items.length;i++){
		items[i].setAttribute("onclick","display(this)");
	}
}

function display(item){
	var child = item.childNodes[0];
	var id = child.id;
	var types= document.getElementsByClassName("type");
	for(var i=0;i<types.length;i++)
	{
		types[i].style.display = "none";
	}
	types[id-1].style.display = "block";
}

function changeimage(picture)
{
	var x = picture.alt;
	
	if(x=="visitor"){
		picture.src = "tobeedited.png";
		picture.alt = "tobeedited";
		
	}
	if(x=="tobeedited"){
		picture.src = "visitor.png";
		picture.alt = "visitor";
	}
	if(x=="piracy"){
		picture.src = "img3.jpg";
		picture.alt = "piracy2";
	
	}
	if(x=="piracy2"){
		picture.src = "img1.jpg";
		picture.alt = "piracy";
	
	}
}


