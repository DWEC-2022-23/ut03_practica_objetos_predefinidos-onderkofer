let losReyesMagos=document.getElementById("reyes");
losReyesMagos.addEventListener("click", reyesMagos);

let fechActual=document.getElementById("fechAct");
fechActual.addEventListener("click", fechaActual);

let randomNum=document.getElementById("randomNum");
randomNum.addEventListener("click", randomNumber);

let circulo=document.getElementById("radio");
circulo.addEventListener("click", calcularAreaCirculo);

let str=document.getElementById("cadenaText");

let halfString=document.getElementById("half");
halfString.addEventListener("click",mitadCar);
let lastChar=document.getElementById("lastChar");
lastChar.addEventListener("click",ultimoCaracter);
let inverse=document.getElementById("inverse");
inverse.addEventListener("click",cadenaInversa);
let barSplit=document.getElementById("barSplit");
barSplit.addEventListener("click",cadenaGuiones);
let vowels=document.getElementById("vowels");
vowels.addEventListener("click",contarVocales);


//All the date objects to compare de dates 
function reyesMagos(){
  let fechaSeleccionada=new Date(document.getElementById("selectDate").value);
  let str5=(fechaSeleccionada.getFullYear()+1)+"-01-06";
  let rey=new Date(str5);
  let diff=fechaSeleccionada-rey;
  let diff2= Math.floor(diff/(1000*60*60*24));

  alert(`Quedan: ${diff2} para los reyes magos`);
}




function  fechaActual(){
  let weekDnow; 
  let monthNow;
//Gets to the button that shows the actual date
let date=document.getElementById("DATE").value;


let actYear=date.getFullYear; //returns year
let actMonth=date.getMonth //returns month
let monthDay=date.getDay; //returns day of the month
let weekDay=date.getDate; //returns day of the week
let hours=date.getHours; //hours
let mins=date.getMinutes //minutes

if(weekDay==0){
   weekDnow="domingo"
}
else if(weekDay==1){
   weekDnow="lunes"
}
else if(weekDay==2){
   weekDnow="martes"
}
else if(weekDay==3){
   weekDnow="miercoles"
}
else if(weekDay==4){
   weekDnow="jueves"
}
else if(weekDay==5){
   weekDnow="viernes"
}
else{
   weekDnow="sabado"
}
 

switch(actMonth){
  
  case 0:
    monthNow="enero";
  break;

  case 1:
    monthNow="febrero";
  break;

  case 2:
    monthNow="marzo";
  break;

  case 3:
    monthNow="abril";
  break;

  case 4:
    monthNow="mayo";
  break;

  case 5:
    monthNow="junio";
  break;

  case 6:
     monthNow="julio";
  break;

  case 7:
    monthNow="agosto";
  break;

  case 8:
    monthNow="septiembre";
  break;

  case 9:
    monthNow="octubre";
  break;

  case 10:
    monthNow="noviembre";
  break;

  case 11:
    monthNow="diciembre";
  break;

  default:
    alert("el mes no existe");
    break;
}

alert(`hoy es ${weekDnow}, ${monthDay} de ${monthNow} de ${actYear} y son las ${hours}:${mins} horas.`);
}




function randomNumber(){
  let num1=prompt("Introduce un numero minimo");
  let num2=prompt("introduce un segundo numero maximo");
  
  function randomIntFromInterval(min, max) { 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const rndInt = randomIntFromInterval(num1, num2)
      alert(rndInt);
}




function calcularAreaCirculo(){

let radio=prompt("Introduce un radio");

  let area=Math.PI*Math.pow(radio,2)

  let longitud=2*radio*Math.PI;

  alert(`el area de la circunferencia es:${area} y la longitud es:${longitud}`);
}





function mitadCar(){
  
  let string = str.value;
	string.split("",string.length/2).join("").replace(",","");

  alert(string);

}

function ultimoCaracter(){

  let str1=str.value;
  str1.slice(-1);

  alert(str1);
}

function cadenaInversa(){

  let str2=str.value;
  str2.split("").reverse().join("");
  
  alert(str2);
}

function cadenaGuiones(){

  let str3=str.value;
  str3.split("").join("-");

  alert(str3);
}

function contarVocales(){

  let regex=/[aeiou]/gi;
  let str4=str.value;

  alert("numero de vocales:" + str4.match(regex).length);
}