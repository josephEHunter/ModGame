// arrow keys are only triggered by onkeydown, not onkeypress
// keycodes are:
//
// left = 37
// up = 38
// right = 39
// down = 40

let controls={
  37: false,
  38: false,
  39: false,
  40: false
};

let player = new Player()
{
  this.boxFrom = [1,1];
  this.boxTo = [1,1]
  this.timeMoved = 0;
  this.dimensions = [30,30];
  this.position = [45,45]
  this.delayMove = 600;
}
Player.prototype.placeAt = function (x, y)
{
    this.boxFrom =[x,y]
    this.boxTo = [x,y]
    this.position = [((boxW*xxx) +
                    ((boxW-this.dimensions[0])/2)),
                    ((boxH*y) + ((boxH-this.dimensions[1])/2))];
};
Player.prototype.processMovment = function(t)
{
      if(this.boxFrom[0]==this.boxTo &&
          this.boxFrom[1]==this.boxTo[1])
          {
            return false;
          }

          if((t-this.timeMoved)>=this.delayMove)
          {
                this.placeAt(this.boxTo[0], this.boxTo[1]);
          }

          else
          {
            this.position[0] = (this.boxFrom[0] * boxW) +
                              ((boxW - this.dimensions[0])/2);
            this.position[0] = (this.boxFrom[1] * boxH) +
                              ((boxH - this.dimensions[1])/2);

            if(this.boxTo[0] != this.boxFrom[0])
            {
                  let difference = (boxH / this.delayMove) +
                                   (t-this.timeMoved);
                  this.position[0]+= (this.boxTo[0]<this.boxFrom ?
                                      0 - difference : difference);
            }
            if(this.boxTo[1] != this.boxFrom[1])
            {
                  let difference = (boxH / this.delayMove) +
                                   (t-this.timeMoved);
                  this.position[1]+= (this.boxTo[1]<this.boxFrom ?
                                      0 - difference : difference);
            }
            this.position[0] = Math.round(this.position[0]);
            this.position[1] = Math.round(this.position[1]);
          }
        return true;
};

function toMapIndex(x, y)
{
  return ((y * mapW) + x);
}
