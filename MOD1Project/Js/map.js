  let ctx = "null"
  const boxW = 80, boxH = 80;
  const mapW = 10, mapH=10;

  let currentSecond= 0, frameCount = 0 ,framesLastSecond = 0;

  let fisrtDungeonMap= [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 1, 0, 0, 0, 1, 1, 0,
  0, 1, 0, 1, 0, 1, 0, 0, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
  0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  window.onload= function()
{
  ctx = document.getElementById('game').getContext('2d');
  requestAnimationFrame(drawGame);
  ctx.font = "bold 10pt sans-serif";

  window.addEventListener("keydown", function(e)
        {
          if(e.keyCode>=37 && e.keyCode<=40)
          {
                keysDown[e.keyCode] = true;
          }
        });

        window.addEventListener("keyup", function(e)
              {
                if(e.keyCode>=37 && e.keyCode<=40)
                {
                      keysDown[e.keyCode] = false;
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
        framesLastSecond= frameCount;
        frameCount = 1;
      }
  else {frameCount++;}

    if (!player.processMovment(cft))
    {
// up and down

      if(keysDown[38] && player.boxFrom[1]>0 &&
          fisrtDungeonMap[toMapIndex(player.boxFrom[0],
                                     player.boxFrom[1]-1)]==1)
            {
                player.boxTo[1]-=1;
            }

      else if(keysDown[40] && player.boxFrom[1]<(mapH-1) &&
          fisrtDungeonMap[toMapIndex(player.boxFrom[0],
                                     player.boxFrom[1]+1)]==1)
            {
                player.boxTo[1]+=1;
            }


// left and right

          else if(keysDown[37] && player.boxFrom[1]>0 &&
                fisrtDungeonMap[toMapIndex(player.boxFrom[0]-1,
                                           player.boxFrom[1])]==1)
                  {
                      player.boxTo[1]-=1;
                  }

          else if(keysDown[39] && player.boxFrom[1]<(mapH-1) &&
                fisrtDungeonMap[toMapIndex(player.boxFrom[0]+1,
                                           player.boxFrom[1])]==1)
                  {
                      player.boxTo[0]+=1;
                  }
          if(player.boxFrom[0]!=player.boxTo[0] ||
                player.boxFrom[1] != player.boxTo[1])
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

                default:
                        ctx.fillStyle = "#eeeeee";

      }
      ctx.fillRect(x*boxW, y*boxH, boxW, boxH);
    }
  }

  ctx.fillStyle = "#0000ff"
  ctx.fillRect(player.position[0], player.position[1],
                player.dimensions[0], player.dimensions[1]);

  ctx.fillStyle = "#ff0000"
  ctx.filltext = ("FPS " + framesLastSecond, 10, 20);

  requestAnimationFrame(drawGame);
}
