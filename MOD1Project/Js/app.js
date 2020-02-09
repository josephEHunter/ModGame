// maybe random value between range
let player;

function Player (class, value, value, value) {
this.classType= classType;
this.hp= hp;
this.mp= mp;
this.str= str;
this.dex=dex;
this.int=int;
this.xp=xp;

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

let slime= new Opp("Slime")
let goblin= new Opp("Goblin")
let wyvern= new Opp("Wyvern")
let tekato= new Opp("Tekato")
let instructor= new Opp("Intructor")


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

let dragon= new Opp("Dragon")
let warewolf= new Opp("Warewolf")
let perscholas= new Opp("Perscholas")

// title screen with input or /button to start the game and load up playerCharSelect
// let gameStart=()=>{
//
// }
// let playerCharSelect = ()=>{
//
// }
// game area layout radom grid and colum squares and movement functions that show
// or highlight which square the player is on enemy squares stay hidden or nutrual
// unitl player lands on the said square different color highlight square post battle
// maybe let player rematch defeated enemy in that case promt would you like to rematch
// yes no on click or on enter event diplay also player health mp xp have a button
// that also brings up player stats
// :
// :
// :
// :
// :
// if player on square = enemy(true)
//    bring up battle screen layout and battle functions display player info and img
//    attack button in the middle or under the enemy and enemy img and stats
//
// // what happens on player death
// let onPlayerDeath=()=>{
//   if player health is or less than 0
// }
// // what happens on enemy death
// let onenemyDeath=()=>{
//   if enemy health is or less than 0
//         or (||)
//      bossEnemy enemy health is or less than 0{
//               if (bossEnemy health is or less than 0){
//                     (game win)
//                   }
//             add enemy xp to player xp
// }
