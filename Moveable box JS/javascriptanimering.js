/*Tim Sjöblom*/
var canvas;
var context;

/*Skapar ett objekt*/
var fyrkant = new Object();
fyrkant.x = 0;
fyrkant.y = 0;

window.onload= function(){
	
	/*Skapar ett canvas fönster och ger det ett ID sätter även 2d för den ska animera i 2D*/
	canvas = document.getElementById('nyCanvas');
	context = canvas.getContext('2d');
	drawing();
	
	/*Skapar en funktion för knappt styrning jag binder sedan up ner höger och vänster till pil tangenterna med en if och else sats*/
	document.onkeydown = function(e)
	{
		if (e.keyCode == "39")
		{
			moveRight();
		}
		
		if (e.keyCode == "37")
		{
			moveLeft();
	
		}


		if (e.keyCode == "38")
		{
			moveUp();
		
		}
		
	
		if (e.keyCode == "40")
		{
			
		moveDown();
		
		}
	
	}	
}
	
	
	
/*Skapar min drawing function väjler en färg på objektet sedan använder jag 
clearrect för att den inte ska rita en linje, och istället förbli en fyrkant */


function drawing(){
context.clearRect(0,0,canvas.width, canvas.height);
context.fillStyle = "#FF0000";
context.fillRect(fyrkant.x,fyrkant.y,50,50);
}

/* Skapar 4 functioner för att bestämma hur långt objekted ska förflytta sig jag sätter även !=0 och !=450 
så objektet inte ska gå utanför ramen*/
function moveRight(){
	if(fyrkant.x != 450){
	fyrkant.x += 10;
	drawing();
	}
}


function moveLeft(){
	if(fyrkant.x !=0){
	fyrkant.x -= 10;
	drawing();
	}
}

function moveUp(){
	if(fyrkant.y !=0){
	fyrkant.y -= 10;
	drawing();
}	
}

function moveDown(){
	if(fyrkant.y !=450){
	fyrkant.y += 10;
	drawing();
	}
}

/*https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect 2016-09-26:19:05
Även powerpointen från föreläsning 10,11 och 12 har jag använt som källa.
*/
