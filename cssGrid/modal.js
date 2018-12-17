function changeTextColor(colorSelect){
		localStorage.setItem("textColor", colorSelect);

		var text = document.querySelectorAll(".changeColorText");
		console.log(text);

		for (var i = 0; i < text.length; i++)
		{		
			text[i].style.color =  colorSelect;
		}
		
		
		
		var svgs = document.querySelectorAll(".st0");
		
		for (var i = 0; i < svgs.length; i++)
			 {
				svgs[i].style.stroke=colorSelect;
			}
}


function changeBackgroundColor(backSelect){
	
	var backgrounds = document.querySelectorAll(".background");
	localStorage.setItem("backColor", backSelect);
	for (var i = 0; i < backgrounds.length; i++)
		 {

			backgrounds[i].style.background =  backSelect;

		}	
	
}

function changeFont(font){
	localStorage.setItem("fontFamily", font);
	var text = document.querySelectorAll(".changeColorText");
		for (var i = 0; i < text.length; i++)
			{
				text[i].style.fontFamily=font.value;
			}
}


function presetLoad(){
	
	var presetFont = localStorage.getItem("fontFamily");
		if (presetFont !== null){
				changeFont(presetFont);
			}
		
	var presetBackground = localStorage.getItem("backColor");
	console.log(presetBackground)
		if (presetBackground !== null){
				changeBackgroundColor(presetBackground);
			}
		
	var presetTextColor = localStorage.getItem("textColor");
	
		if (presetTextColor !== null){
				changeTextColor(presetTextColor);
			}
		
}


document.addEventListener ("DOMContentLoaded",function() {
	
	presetLoad();
	// JavaScript Document
	// Get the modal
	var modal = document.getElementById('myModal');
	
	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal 
	btn.onclick = function() {
		modal.style.display = "block";
	};

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	};

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};
	
	var submitButton = document.getElementById("btnTwo");
	
	submitButton.onclick = function()  {
		
		var colorSelect = document.getElementById("textColor").value;
		changeTextColor (colorSelect);
		

		
		var font = document.querySelector(".fontSelector").value;
		console.log(font);
		changeFont(font);
		

		
		
		
//		var colorSelect = document.getElementById("textColor").value;
//		var svg = document.querySelectorAll(".st0");
//		console.log (svg);
//		
//		
//		for (var i = 0; i < svg.length; i++)
//		{		
//			svg[i].style.color =  colorSelect;
//		}
		
//		function svgMod(colorSelect)
//			{
//				var s = document.getElementsByClassName("svgClass");
//				console.log(s);
//				for (var i = 0; i<s.length; i++)
//					{
//						s[i].setAttribute("stroke",colorSelect);
//					}
//			}
//		svgMod(colorSelect);
		
		var backSelect = document.getElementById("backColor").value;
		changeBackgroundColor(backSelect)
		modal.style.display = "none";
	};
	

	
	
});