// document.addEventListener('DOMContentLoaded', () => {
// console.log(document.body);
//  }, false);

 window.onload = () => {
     let body = document.body;
     let textContent = body.textContent || body.innerText;

     console.log(textContent);
     };