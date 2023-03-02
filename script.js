let username = prompt("Istifadeci adinizi daxil edin: ");
let exitProgram = true;
let balance = 1000;
while(exitProgram){
if(username == "cavad"){

let choice = prompt("Pul daxil etmek ucun - 'daxil', pul cekmek ucun - 'cek', balansi gormek ucun - 'balans', proqramdan cixmaq ucun '0' yazin ");

if (choice === "daxil") {
  let depositAmount = prompt("Daxil etmek istediyiniz pulun miqdari");
  
    balance += depositAmount;
  
  alert("Balans $" + balance);
} else if (choice === "cek") {
  let withdrawAmount = prompt("Cekmek istediyiniz pulun miqdarini daxil edin");
  
  if (withdrawAmount > balance) {
    alert("balansda yeterince pul yoxdur");
  } else {
    balance -= withdrawAmount;
    
    alert("Balans $" + balance);
  }
} else if(choice == "balans"){
    alert(balance)
}else if (choice == "0"){
    exitProgram = false;
}

else {
  alert("Zehmet olmasa duzgun secim edin");
    }
  }else{
    alert("Zehmet olmasa duzgun ad daxil edin")
    username =  prompt("Istifadeci adinizi daxil edin: ");
  }
}