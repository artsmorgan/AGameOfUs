Crafty.defineScene("firstLevel", function() {

Crafty.background('#FFFFFF url(images/scenario-1.jpg) no-repeat ');

var _calculateCtrl_x = 0;

var playerCurrent_x = 0;
var playerOld_x = 0;

var playerCurrent_y = 0;
var playerOld_y = 0;

var steps = 96;

generate_land();

//Crafty.sprite("images/player-sprite.png", {xillo:[0,178,85,85]});
Crafty.sprite("images/player-sprite.png", {xillo:[0,178,85,85]});

var michellilla = Crafty.e('2D, DOM, Color, Gravity,Image,Tween')
	.image('images/michellilla.png', 'no-repeat')
	.attr({x: 87, y: 0, w: 87, h: 87,z:99999})  
	 .gravity('Floor')
	 .gravityConst(0.5)
	 .tween({ y: 10}, 500)
	 .tween({ y: -10}, 500)
	 .bind('Click',function(){
	 	alert('Quieres ser mi novia?')
	 })

var player = Crafty.e('2D, DOM, Color, Gravity,Tween,xillo,SpriteAnimation')
  .attr({x: 0, y: 0, w: 87, h: 87})  
  .gravity('Floor')
  .gravityConst(0.5)
  .reel('walkRight', 300, [[86, 178], [166, 178], [244, 178], [0, 178]])
  .reel('walkleft', 300, [[86, 260], [166, 260], [244, 260], [0, 260]])
  .reel('jumpRight', 300, [[86, 90], [169, 90], [244, 90], [0, 90]])
  .reel('jumpLeft', 300, [[86, 0], [169, 0], [244, 0], [0, 0]])
  .bind("EnterFrame", function(e) {
	console.log(player.attr().y);

	if(player.attr().y >= 900){
		var e = confirm('Game Over');
		if(e){
			location.reload();
		}
	}

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
     playerCurrent_x = (playerOld_x + steps )*1.25;
     player.animate('jumpRight').loops(2).tween({ y: 50, x: playerCurrent_x}, 500)
	});

var TopLeftCrl = Crafty.e('2D, Canvas, Color, Mouse,Tween')
	.attr({x: 0,w:320,h:100})
	.color('transparent')
	//.color('purple')
	.bind('Click', function() {
     playerOld_x = player.attr().x;
     playerCurrent_x = (playerOld_x - steps)*1.25;
     player.animate('jumpLeft').loops(2).tween({ x: playerCurrent_x, y: 100}, 500);
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
     player.animate('walkleft',-1).loops(1).tween({ x: playerCurrent_x}, 200)
	});


function generate_land(){

	Crafty.e('Floor, 2D, Canvas, Color,Image')
	  .attr({x: 0, y: 150, w: 250, h: 28})
	  .image('images/land.png','repeat-x');

	Crafty.e('Floor, 2D, Canvas, Color,Image')
	  .attr({x: 300, y: 250, w: 150, h: 28})
	  .image('images/land.png','repeat-x');

	Crafty.e('Floor, 2D, Canvas, Color,Image')
	  .attr({x: 600, y: 350, w: 100, h: 28})
	  .image('images/land.png','repeat-x');  

	Crafty.e('Floor, 2D, Canvas, Color,Image')
	  .attr({x: 800, y: 350, w: 100, h: 28})
	  .image('images/land.png','repeat-x'); 


	Crafty.e('Floor, 2D, Canvas, Color,Image')
	  .attr({x: 1000, y: 350, w: 100, h: 28})
	  .image('images/land.png','repeat-x');  

	Crafty.e('Floor, 2D, Canvas, Color,Image')
	  .attr({x: 1150, y: 250, w: 100, h: 28})
	  .image('images/land.png','repeat-x');


	Crafty.e('Floor, 2D, Canvas, Color,Image')
	  .attr({x: 1300, y: 350, w: 100, h: 28})
	  .image('images/land.png','repeat-x'); 


	Crafty.e('Floor, 2D, Canvas, Color,Image')
	  .attr({x: 1400, y: 450, w: 500, h: 28})
	  .image('images/grass.png','repeat-x'); 

	Crafty.e('Floor, 2D, Canvas, Color,Image')
	  .attr({x: 1400, y: 450, w: 100, h: 1000})
	  .color('green');

}


Crafty.viewport.follow(player, 0, 0);
});

