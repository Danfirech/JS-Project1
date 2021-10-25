const dice = 0;


switch(dice) {
  case 1:
    console.log('you got one')
    break;
  
    case 2:
    console.log('you got two')
    break;
    
  case 3:
    console.log('you got three')
    break;

  default:
  console.log('you did not roll the dice')
    

}





// esle if 
if (dice === 1) {
  console.log("you got one");
}

 else if (dice === 2) {
  console.log("you got two");
}

else (dice < 1 || dice > 6) {
  console.log("you did not roll the dice");
}
