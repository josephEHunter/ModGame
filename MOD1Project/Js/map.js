

let adventurer;

function Adventurer (classType, hp, mp, str, dex, int, xp) {
this.classType= classType;
this.hp= hp;
this.mp= mp;
this.str= str;
this.dex=dex;
this.int=int;
this.xp=xp;

};
let Warrior= new Adventurer("Warrior")

let Mage= new Adventurer("Mage")

let Theif= new Adventurer("Theif")

let enemy;

function Enemy (name, value, value, value) {
this.name= name;
this.hp= (Math.floor(Math.random() *2)+4);
this.mp= Math.random();
this.atk= (Math.floor(Math.random() *10)+5);
this.xp=value;
};

let slime= new Enemy("Slime")
let goblin= new Enemy("Goblin")
let wyvern= new Enemy("Wyvern")
let tekato= new Enemy("Tekato")
let instructor= new Enemy("Intructor")


let bossEnemy;

function BossEnemy (name, value, value, value) {
this.name= name;
this.hp= (Math.floor(Math.random() *2)+4);
this.mp= Math.random();
this.str= (Math.floor(Math.random() *10)+5);
this.dex=value;
this.int=value;
this.xp=value;
};

let dragon= new BossEnemy("Dragon")
let warewolf= new BossEnemy("Warewolf")
let perscholas= new BossEnemy("Perscholas")



let gameManager={
  setGameStart: function(classType){
    this.resetPlayer(classType);
    this.setPreFight();

  },
  resetPlayer: function(classType){
    switch (classType) {
      case "Warrior":
        adventurer = new Adventurer(Warrior, 250, 100, 45, 5, 0, 0);
        break;

      case "Theif":
          adventurer = new Adventurer(Theif, 250, 100, 10, 45, 0, 0);
          break;

      case "Mage":
            adventurer = new Adventurer(Mage, 250, 200, 0, 5, 60, 0);
            break;
    }

    let getInterface = document.getElementById('interface').innerHTML=
    '<div>' +
    '<h3>'  + classType + '</h3>' +
    '<p> HP:  ' + adventurer.hp + ' </p>' +
    '<p> MP:  ' + adventurer.mp + '</p>' +
    '<p> STR: ' + adventurer.str + '</p>' +
    '<p> DEX: ' + adventurer.dex + '</p>' +
    '<p> INT: ' + adventurer.int + '</p>' +
    '<p> XP:  ' + adventurer.xp + '</p>' +
    '</div>';
  },
  setPreFight: function(){

    let getCanvas = document.getElementById('game').style.display="block";
                    document.getElementById('preGame').style.display="none";
  }
}
// battleScreen

// battleFunctions





let ctx = null;
let gameMap = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 0,
	0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 0,
	0, 1, 1, 1, 0, 0, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 0,
	0, 1, 1, 1, 1, 0, 0, 1, 2, 1, 1, 2, 1, 1, 2, 1, 0, 0, 0, 0,
	0, 2, 3, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 2, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 2, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 1, 0,
	0, 1, 1, 1, 1, 2, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 2, 1, 0,
	0, 1, 2, 2, 2, 2, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 2, 1, 0,
	0, 1, 2, 1, 1, 2, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 3,
	0, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0,
	0, 1, 2, 1, 0, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 0,
	0, 2, 2, 1, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 1, 0,
	0, 2, 2, 1, 0, 0, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0,
	0, 1, 2, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0,
	0, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];
let boxW = 40, boxH = 40;
let mapW = 20, mapH = 20;
let currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;

let floorTypes = {
	solid	: 0,
	path	: 1,
	fight : 2,

};

let boxEvents = {

  101:function(c){c},
  102:function(c){c}
};

// to find toIndex
//       (y * mapW) + x)
// don't forget >0<
//0 is still first in array coords


function battleBox()
// can do or statements to add more cords
{ if (gameMap[toIndex(5,1)]==gameMap[toIndex(5,1)] ||
      gameMap[toIndex(5,2)]==gameMap[toIndex(5,2)])
      {


  // generate new enemy
  // if new enemy health > 0

    document.getElementById('game').style.display='none';
    document.getElementById('battleScreen').style.display="inline"
    document.getElementById('battleScreen').innerHTML="<h1>BATTLE</h2>" +

    '<div>' +
    '<h3>'  + name + '</h3>' +
    '<p> HP:  ' + slime.hp + ' </p>' +
    '<p> MP:  ' + slime.mp + '</p>' +
    '<p> STR: ' + slime.str + '</p>' +
    '<p> XP:  ' + slime.xp + '</p>' +
    '</div>';

    // let hp = 3;
    // for(let hp = 3; hp>0; hp--)
    console.log("hey");
    // return true;
}

}


let boxTypes = {
	0 : { colour:"#685b48", floor:floorTypes.solid	},
	1 : { colour:"#5aa457", floor:floorTypes.path	},
	2 : { colour:"#e8bd7a", floor:floorTypes.path	},
	3 : { colour:"#286625", floor:floorTypes.path	}
};

let keysDown = {
	37 : false,
	38 : false,
	39 : false,
	40 : false
};

let viewport = {
	screen		: [0,0],
	startbox	: [0,0],
	endbox		: [0,0],
	offset		: [0,0],
	update		: function(px, py) {
		this.offset[0] = Math.floor((this.screen[0]/2) - px);
		this.offset[1] = Math.floor((this.screen[1]/2) - py);

		let box = [ Math.floor(px/boxW), Math.floor(py/boxH) ];

		this.startbox[0] = box[0] - 1 - Math.ceil((this.screen[0]/2) / boxW);
		this.startbox[1] = box[1] - 1 - Math.ceil((this.screen[1]/2) / boxH);

		if(this.startbox[0] < 0) { this.startbox[0] = 0; }
		if(this.startbox[1] < 0) { this.startbox[1] = 0; }

		this.endbox[0] = box[0] + 1 + Math.ceil((this.screen[0]/2) / boxW);
		this.endbox[1] = box[1] + 1 + Math.ceil((this.screen[1]/2) / boxH);

		if(this.endbox[0] >= mapW) { this.endbox[0] = mapW-1; }
		if(this.endbox[1] >= mapH) { this.endbox[1] = mapH-1; }
	}
};

let player = new Character();

function Character()
{
	this.boxFrom	= [1,1];
	this.boxTo		= [1,1];
	this.timeMoved	= 0;
	this.dimensions	= [30,30];
	this.position	= [45,45];
	this.delayMove	= 700;
}
Character.prototype.placeAt = function(x, y)
{
	this.boxFrom	= [x,y];
	this.boxTo		= [x,y];
	this.position	= [((boxW*x)+((boxW-this.dimensions[0])/2)),
		((boxH*y)+((boxH-this.dimensions[1])/2))];
};
Character.prototype.processMovement = function(t)
{
	if(this.boxFrom[0]==this.boxTo[0] && this.boxFrom[1]==this.boxTo[1]) { return false; }

	if((t-this.timeMoved)>=this.delayMove)
	{
		this.placeAt(this.boxTo[0], this.boxTo[1]);

  if(typeof boxEvents[toIndex(this.boxTo[0], this.boxTo[1])]!='undefined'||
  typeof boxEvents[toIndex(this.boxFrom[0], this.boxFrom[1])]!='undefined')

    {
      battleBox();
    }

  }
  else
	{
		this.position[0] = (this.boxFrom[0] * boxW) + ((boxW-this.dimensions[0])/2);
		this.position[1] = (this.boxFrom[1] * boxH) + ((boxH-this.dimensions[1])/2);

		if(this.boxTo[0] != this.boxFrom[0])
		{
			let diff = (boxW / this.delayMove) * (t-this.timeMoved);
			this.position[0]+= (this.boxTo[0]<this.boxFrom[0] ? 0 - diff : diff);
		}
		if(this.boxTo[1] != this.boxFrom[1])
		{
			let diff = (boxH / this.delayMove) * (t-this.timeMoved);
			this.position[1]+= (this.boxTo[1]<this.boxFrom[1] ? 0 - diff : diff);
		}

		this.position[0] = Math.round(this.position[0]);
		this.position[1] = Math.round(this.position[1]);
	}

	return true;
}
Character.prototype.canMoveTo = function(x, y)
{
	if(x < 0 || x >= mapW || y < 0 || y >= mapH || battleScreen==true) { return false; }
	if( boxTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.path && boxTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.enemy && boxTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.boss) { return false; }
	return true;
};
Character.prototype.canMoveUp		= function() { return this.canMoveTo(this.boxFrom[0], this.boxFrom[1]-1); };
Character.prototype.canMoveDown 	= function() { return this.canMoveTo(this.boxFrom[0], this.boxFrom[1]+1); };
Character.prototype.canMoveLeft 	= function() { return this.canMoveTo(this.boxFrom[0]-1, this.boxFrom[1]); };
Character.prototype.canMoveRight 	= function() { return this.canMoveTo(this.boxFrom[0]+1, this.boxFrom[1]); };

Character.prototype.moveLeft	= function(t) { this.boxTo[0]-=1; this.timeMoved = t; };
Character.prototype.moveRight	= function(t) { this.boxTo[0]+=1; this.timeMoved = t; };
Character.prototype.moveUp		= function(t) { this.boxTo[1]-=1; this.timeMoved = t; };
Character.prototype.moveDown	= function(t) { this.boxTo[1]+=1; this.timeMoved = t; };

function toIndex(x, y)
{
	return((y * mapW) + x);
}

window.onload = function()
{
  document.getElementById("battleScreen").style.display = "none";
  document.getElementById("game").style.display = "none";

  // return gameManager

	ctx = document.getElementById('game').getContext("2d");
	requestAnimationFrame(drawGame);
	ctx.font = "bold 10pt sans-serif";

	window.addEventListener("keydown", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
	});
	window.addEventListener("keyup", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
	});

	viewport.screen = [document.getElementById('game').width,
		document.getElementById('game').height];
};

function drawGame()
{
	if(ctx==null) { return; }

	let currentFrameTime = Date.now();
	let timeElapsed = currentFrameTime - lastFrameTime;

	let sec = Math.floor(Date.now()/1000);
	if(sec!=currentSecond)
	{
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	}
	else { frameCount++; }

	if(!player.processMovement(currentFrameTime))
	{
		if(keysDown[38] && player.canMoveUp())			{ player.moveUp(currentFrameTime); }
		else if(keysDown[40] && player.canMoveDown())	{ player.moveDown(currentFrameTime); }
		else if(keysDown[37] && player.canMoveLeft())	{ player.moveLeft(currentFrameTime); }
		else if(keysDown[39] && player.canMoveRight())	{ player.moveRight(currentFrameTime); }
	}

	viewport.update(player.position[0] + (player.dimensions[0]/2),
		player.position[1] + (player.dimensions[1]/2));

	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

	for(let y = viewport.startbox[1]; y <= viewport.endbox[1]; ++y)
	{
		for(let x = viewport.startbox[0]; x <= viewport.endbox[0]; ++x)
		{
			ctx.fillStyle = (boxTypes[gameMap[toIndex(x,y)]].colour)

			ctx.fillRect( viewport.offset[0] + (x*boxW), viewport.offset[1] + (y*boxH),
				boxW, boxH);
		}
	}

	ctx.fillStyle = "#0000ff";
	ctx.fillRect(viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
		player.dimensions[0], player.dimensions[1]);

	ctx.fillStyle = "#ff0000";


	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);
}
