var gameSettings = {
	width: 2800,
	height: 600
}


Crafty.init(gameSettings.width,gameSettings.height,  document.getElementById('game'));
//Crafty.viewport.clampToEntities = true;
Crafty.viewport.init(480,320, document.getElementById('game'));

Crafty.defineScene("loading", function() {
	Crafty.load(["images/player-sprite.png",
	           "images/scenario-1.jpg"], function() {	           	
	 		Crafty.enterScene("firstLevel");
	});
    Crafty.background("#000");
    Crafty.e("2D, DOM, Text")
          .attr({ w: 100, h: 20, x: 150, y: 120 })
          .text("Loading")
          .css({ "text-align": "center"})
          .textColor("#FFFFFF");
});


Crafty.enterScene("loading");

