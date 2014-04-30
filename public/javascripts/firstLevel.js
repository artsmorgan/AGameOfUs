Crafty.defineScene("firstLevel", function() {

	Crafty.background('#FFFFFF url(images/scenario-1.jpg) no-repeat ');

	var _calculateCtrl_x = 0;

var playerCurrent_x = 0;
var playerOld_x = 0;

var playerCurrent_y = 0;
var playerOld_y = 0;

var steps = 96;


Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 0, y: 250, w: 250, h: 10})
  .color('green');

Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 450, y: 250, w: 250, h: 10})
  .color('red');  

Crafty.sprite("images/player-sprite.png", {xillo:[0,88,85,85]});

var player = Crafty.e('2D, DOM, Color, Gravity,Tween,xillo,SpriteAnimation')
  .attr({x: 0, y: 0, w: 87, h: 87})  
  .gravity('Floor')
  .gravityConst(0.5)
  .reel('walkRight', 300, [[88, 88], [176, 88], [264, 88], [0, 88]])
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
     playerCurrent_x = (playerOld_x + steps )*2;
     player.tween({ y: 50, x: playerCurrent_x}, 500)
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
     
     player.animate('walkRight', -1).loops(1).tween({ x: playerCurrent_x}, 200);
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
});

