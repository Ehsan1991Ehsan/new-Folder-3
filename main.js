'use strict';


let setCookie = (cName, cValue, exdays)=>{
  let cookieDate = new Date();
  cookieDate.setTime(cookieDate.getTime() + (exdays * 24 * 60 * 60 * 1000));
  expires = `expires = ${cookieDate}`;
  document.cookie = `${cName} = ${cValue}; ${expires}; path = /`;
}


let getCookie = (cName)=>{
  let cookieAll = document.cookie.split('; ');
  // console.log(cookieAll);
  for(let i =0; i < cookieAll.length; i++){
    let c = cookieAll[i];
    // console.log(c);
    let parts = c.split('=');
    if(parts[0] === cName){
      return parts[1];
    }
    
  }
  return '';
}



let result = getCookie('theme');

console.log(result);


const num = 123;




