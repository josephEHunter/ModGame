// fighting




function Player (classType, hp, mp, str, dex, int, xp) {
this.classType= classType;
this.hp= hp;
this.mp= mp;
this.str= str;
this.dex=dex;
this.int=int;
this.xp=xp;
};

let warrior= new Player("Warrior");
let mage= new Player("Mage");
let theif= new Player("Theif");



let enemy;

function Enemy (name, hp, mp, atk, xp) {
this.name= name;
this.hp= hp;
this.mp= mp;
this.atk= atk;
this.xp=xp;
};

let slime= new Enemy("Slime");

let goblin= new Enemy("Goblin");

let wyvern= new Enemy("Wyvern");

let tekato= new Enemy("Tekato");

let instructor= new Enemy("Intructor");

let currEnemy = [slime, goblin, wyvern, tekato, instructor];


let bossEnemy;

function BossEnemy (name, value, value, value, value) {
this.name= name;
this.hp= (Math.floor(Math.random() *2)+4);
this.mp= Math.random();
this.atk= (Math.floor(Math.random() *10)+5);
this.xp=value;
};

let dragon= new BossEnemy("Dragon");
let warewolf= new BossEnemy("Warewolf");
let perscholas= new BossEnemy("Perscholas");

let currBoss = [dragon, warewolf, perscholas];

// my attack function

let myAtk = () => {
if (currentEnenmy.hp >= 1 && player.hp > 0){

     currentEnemy.hp -= player.str
     alert("you hit")
     if(currentEnemy.hp<=0){
       return currentEnemy.hp = 0;
     }
     }
     else{
     alert("you missed")
          }
        }
      }

// enemy attack function

      let enAtk = () => {
        if (player.hp>=1 && currentEnemy.hp>0){

              player.hp -= currentEnemy.
              alert("you've been hit")
            }
          }


// what happens on enemy death



// initializes on attack button press
      let atkFun = () => {
        let atkBtn= document.getElementById('atkBtn')


          myAtk();
          enAtk();
          stats();

        }
