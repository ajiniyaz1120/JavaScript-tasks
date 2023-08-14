/*Напишите if..else, соответствующий следующему switch:

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
}*/

let browser = prompt("Имя браузера: ")

if(browser === "Edge"){
  alert("You've got the Edge!")
}else if(browser === "Chrome"){
  alert("Okay we support these browsers too")
}else if(browser === "Firefox"){
  alert("Okay we support these browsers too")
}else if(browser === "Safari"){
  alert("Okay we support these browsers too")
}else if(browser === "Opera"){
  alert("Okay we support these browsers too")
}else{
  alert("We hope that this page looks ok!")
}
