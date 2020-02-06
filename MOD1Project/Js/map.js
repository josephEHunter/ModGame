

function Player (classType, value, value, value) {
this.classType= classType;
this.hp= (Math.floor(Math.random() *2)+4);
this.mp= Math.random();
this.str= (Math.floor(Math.random() *10)+5);
this.dex=value;
this.int=value;
this.xp=value;

};
let warrior= new Player("Warrior")
let mage= new Player("Mage")
let theif= new Player("Theif")



let enemy;

function Enemy (name, value, value, value) {
this.name= name;
this.hp= (Math.floor(Math.random() *2)+4);
this.mp= Math.random();
this.str= (Math.floor(Math.random() *10)+5);
this.dex=value;
this.int=value;
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


  let ctx = "null"
  const boxW = 80, boxH = 80;
  const mapW = 10, mapH=10;

  let currentSecond= 0, frameCount = 0 ,framesLastSecond = 0, lastFrameTime = 0;




  let fisrtDungeonMap= [
  1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 0, 0, 0, 1, 1, 1, 1, 3,
  0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 1, 0, 0, 0, 1, 1, 0,
  0, 1, 0, 1, 0, 0, 0, 0, 1, 0,
  0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
  0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
//     for (let i = 0; i<fisrtDungeonMap.length; i+=20){
//       let 1 = new Enemy()
//     }

  let controls = {
    37: false,
    38: false,
    39: false,
    40: false
  };

  let player = new Character()
function Character()
  {
    this.boxFrom = [1,1,3];
    this.boxTo = [1,1,3];
    this.timeMoved = 0;
    this.dimensions = [30,30];
    this.position = [45,45]
    this.delayMove = 700;
  }
  Character.prototype.placeAt = function (x, y)
  {
      this.boxFrom =[x,y];
      this.boxTo = [x,y];
      this.position = [((boxW*x) +
                      ((boxW-this.dimensions[0])/2)),
                      ((boxH*y) + ((boxH-this.dimensions[1])/2)),
                      ((boxH*y) + ((boxH-this.dimensions[3])/2))];
  };
  Character.prototype.processMovment = function(t)
  {
        if(this.boxFrom[0]==this.boxTo[0] &&
            this.boxFrom[1]==this.boxTo[1] &&
            this.boxFrom[3]==this.boxTo[3])
            {
              return false;
            }

            if((t-this.timeMoved)>=this.delayMove)
            {
                  this.placeAt(this.boxTo[0], this.boxTo[1], this.boxTo[3]);
            }

            else
            {
              this.position[0] = (this.boxFrom[0] * boxW) +
                                ((boxW - this.dimensions[0])/2);
              this.position[1] = (this.boxFrom[1] * boxH) +
                                ((boxH - this.dimensions[1])/2);
              this.position[3] = (this.boxFrom[3] * boxH) +
                                ((boxH - this.dimensions[3])/2);

              if(this.boxTo[0] != this.boxFrom[0])
              {
                    let difference = (boxW / this.delayMove) *
                                     (t-this.timeMoved);
                    this.position[0]+= (this.boxTo[0]<this.boxFrom[0] ?
                                        0 - difference : difference);
              }
              if(this.boxTo[1] != this.boxFrom[1])
              {
                    let difference = (boxH / this.delayMove) *
                                     (t-this.timeMoved);
                    this.position[1]+= (this.boxTo[1]<this.boxFrom[1] ?
                                        0 - difference : difference);
              }

              else if(this.boxTo[3] != this.boxFrom[3])
              {
                    let difference = (boxH / this.delayMove) *
                                     (t-this.timeMoved);
                    this.position[3]+= (this.boxTo[3]<this.boxFrom[3] ?
                                        0 - difference : difference);
              }
              this.position[0] = Math.round(this.position[0]);
              this.position[1] = Math.round(this.position[1]);
              this.position[3] = Math.round(this.position[3]);
            }
          return true;
  }

  function toMapIndex(x, y)
  {
    return ((y * mapW) + x);
  }




window.onload= function()
{
  ctx = document.getElementById('game').getContext('2d');
  requestAnimationFrame(drawGame);
  ctx.font = "bold 10pt sans-serif";

  window.addEventListener("keydown", function(e)
        {
          if(e.keyCode>=37 && e.keyCode<=40)
          {
                controls[e.keyCode] = true;
          }
        });

        window.addEventListener("keyup", function(e)
              {
                if(e.keyCode>=37 && e.keyCode<=40)
                {
                      controls[e.keyCode] = false;
                }
              });

};

function drawGame()
{
  if (ctx==null){return;}

  let cft = Date.now();
  let timeP = cft - lastFrameTime;

      let sec = Math.floor(Date.now()/1000);
      if (sec != currentSecond)
      {
        currentSecond = sec;
        framesLastSecond = frameCount;
        frameCount = 1;
      }
  else {frameCount++;}

    if (!player.processMovment(cft))
    {
// up and down

      if(controls[38] && player.boxFrom[1]>0 &&
          fisrtDungeonMap[toMapIndex(player.boxFrom[0],
                                     player.boxFrom[1]-1)]==1)
            {
                player.boxTo[1]-=1;
                player.boxTo[3]-=1;
            }

      else if(controls[40] && player.boxFrom[1]<(mapH-1) &&
          fisrtDungeonMap[toMapIndex(player.boxFrom[0],
                                     player.boxFrom[1]+1)]==1)
            {
                player.boxTo[1]+=1;
                player.boxTo[3]+=1;
            }


// left and right

          else if(controls[37] && player.boxFrom[0]>0 &&
                fisrtDungeonMap[toMapIndex(player.boxFrom[0]-1,
                                           player.boxFrom[1])]==1)
                  {
                      player.boxTo[0]-=1;
                  }

          else if(controls[39] && player.boxFrom[0]<(mapH-1) &&
                fisrtDungeonMap[toMapIndex(player.boxFrom[0]+1,
                                           player.boxFrom[1])]==1)
                  {
                      player.boxTo[0]+=1;
                  }
          if(player.boxFrom[0]!=player.boxTo[0] ||
                player.boxFrom[1] != player.boxTo[1] ||
                   player.boxFrom[1] != player.boxTo[3])
                {
                  player.timeMoved = cft;
                }
    }


  for (let y = 0; y < mapH; y++){

    for (let x = 0; x < mapW; x++){

      switch (fisrtDungeonMap[((y*mapW)+x)]) {
        case 0:
                ctx.fillStyle = "#999999";
                break;

        case 3:
                ctx.fillStyle ="red";
                break;

                default:
                        ctx.fillStyle = "#eeeeee";

      }
      ctx.fillRect(x*boxW, y*boxH, boxW, boxH);
    }
  }

  ctx.fillStyle = "#0000ff";
  ctx.fillRect(player.position[0], player.position[1],
                player.dimensions[0], player.dimensions[1]);


  ctx.fillStyle = "#ff0000"
  ctx.filltext = ("FPS " + framesLastSecond, 10, 20);

  requestAnimationFrame(drawGame);
}
