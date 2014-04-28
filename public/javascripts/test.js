var gameSettings = {
	width: 2800,
	height: 600
}

var _calculateCtrl_x = 0;

var playerCurrent_x = 0;
var playerOld_x = 0;

var playerCurrent_y = 0;
var playerOld_y = 0;

var steps = 96;

Crafty.init(gameSettings.width,gameSettings.height,  document.getElementById('game'));
//Crafty.viewport.clampToEntities = true;
Crafty.viewport.init(480,320, document.getElementById('game'));

Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 0, y: 250, w: 250, h: 10})
  .color('green');

Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 450, y: 250, w: 250, h: 10})
  .color('red');  


var player = Crafty.e('2D, DOM, Color, Twoway, Gravity,Tween')
  .attr({x: 0, y: 0, w: 32, h: 32})
  .color('#F00')
  .twoway(4)
  .gravity('Floor')
  .gravityConst(0.5)
  .bind("EnterFrame", function(e) {
	//console.log(player.attr().x);
	TopLeftCrl.attr().x  = player.attr().x - TopLeftCrl.attr().w;
	TopLeftCrl.attr().y  = player.attr().y - (LeftCrl.attr().h - player.attr().h + TopLeftCrl.attr().h);

	TopRightCrl.attr().x = player.attr().x + player.attr().w;
	TopRightCrl.attr().y = player.attr().y - (RightCrl.attr().h - player.attr().h + TopRightCrl.attr().h);

	LeftCrl.attr().x  = player.attr().x - LeftCrl.attr().w;
	LeftCrl.attr().y  = player.attr().y - (LeftCrl.attr().h - player.attr().h);

	RightCrl.attr().x = player.attr().x + player.attr().w;
	RightCrl.attr().y = player.attr().y - (RightCrl.attr().h - player.attr().h);
  });


var TopRightCrl = Crafty.e('2D, Canvas, Color, Mouse,Tween')	
    .attr({x: 0,w:320,h:100})
	.color('transparent')
	//.color('purple')
	.bind('Click', function() {
     playerOld_x = player.attr().x;
     playerCurrent_x = playerOld_x + steps;
     player.tween({ y: 100, x: playerCurrent_x}, 500)
	});

var TopLeftCrl = Crafty.e('2D, Canvas, Color, Mouse,Tween')
	.attr({x: 0,w:320,h:100})
	.color('transparent')
	//.color('purple')
	.bind('Click', function() {
     playerOld_x = player.attr().x;
     playerCurrent_x = playerOld_x - steps;
     player.tween({ x: playerCurrent_x, y: 100}, 500);
	});	


var RightCrl = Crafty.e('2D, Canvas, Color, Mouse,Tween')
	.attr({x: 0,w:320,h:100})
	.color('transparent')
	//.color('blue')
	.bind('Click', function() {
     playerOld_x = player.attr().x;
     playerCurrent_x = playerOld_x + steps;
     player.tween({ x: playerCurrent_x}, 200)
	});


var LeftCrl = Crafty.e('2D, Canvas, Color, Mouse,Tween')
	.attr({x: 0 ,w:320,h:100})
	.color('transparent')
	//.color('blue')
	.bind('Click', function() {
     playerOld_x = player.attr().x;
     playerCurrent_x = playerOld_x - steps;
     player.tween({ x: playerCurrent_x}, 200)
	});



Crafty.viewport.follow(player, 0, 0);
/*var refreshIntervalId = setInterval(function(){

	var playerX = player.attr().x;
	var playerY = player.attr().y;	
	console.log('Player X: ' + playerX);
	console.log('Player Y: ' + playerY);

	if(playerY>= gameSetting.height){
		Crafty.pause();
		clearInterval(refreshIntervalId);
		console.log('Game Over');
	}
},200)*/
