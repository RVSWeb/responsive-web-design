/* 
 Created on : 23-sep-2019, 9:07:19
 Author     : Raul Vela
 */

function myFunction() {

  var x = document.getElementById('myTopnav');
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}