/*
Напишите if..else, соответствующий следующему switch:
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/

let browser = prompt("Enter browser name: ")
function startup (param){
    if(param === "Edge"){
        document.write("You have entered the correct browser.");
    }else if(param === "Chrome"){
        document.write("You've got the Chrome!");
    }else if(param === "Safari"){
        document.write("You have entered the correct browser.");
    }else if(param === "Opera"){
        document.write("You have entered the correct browser.");
    }else if(param === "Firefox"){
        document.write("You have entered the correct browser.");
    }else{
        document.write("Try again. We do not have this browser.");
    }
}
startup(browser)