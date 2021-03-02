let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
cabinet1 = food.split(',').sort();  
cabinet2 = equipment.split(',').sort();
cabinet3 = pets.split(',').sort();
cabinet4 = sleepAids.split(',').sort();
//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(cabinet1,cabinet2,cabinet3,cabinet4);
//console.log(cargoHold);
console.log("The CargoHold Array = ", cargoHold);

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let cabinetArray = input.question("Select a cabinet: ");
//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

while(cabinetArray<0 || cabinetArray>3)
{
  cabinetArray = input.question("Select a cabinet: ");
}

if(cabinetArray==0) {
  console.log("Cabinet 0: ", cargoHold[0]);}
else if(cabinetArray==1) {
  console.log("Cabinet 1: ", cargoHold[1]);}
else if(cabinetArray==2) {
  console.log("Cabinet 2: ", cargoHold[2]);}
else if(cabinetArray==3) {
  console.log("Cabinet 3: ", cargoHold[3]);}

//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
favouriteItem = input.question("Enter the item: ");
if(cargoHold[cabinetArray].includes(favouriteItem))
{
  console.log(`Cabinet DOES contain ${favouriteItem}.`)
}else{
  console.log(`Cabinet DOES NOT contain ${favouriteItem}.`)
}