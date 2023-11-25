import logo from './logo.svg';
import './App.css';

let yourAge = +prompt("Введіть скільки вам років:");
const currentYear = 2023;
alert('Ваш рік народження' + (currentYear-yourAge))

  let celsius = +prompt("Введіть скільки градусів на вулиці" );
  let fahrenheit = (celsius * 9/5) + 32;
  alert ('градусів по Фарингейту:' + (celsius * 9/5 + 32));
       
 let number1 = +prompt("Введіть переше число");  
 let number2 = +prompt("Введіть друге число");
 let result = Math.floor(number1/number2);
 alert (result);  
 
 let summahrvn = +prompt("Введіть наявну у вас суму в гривнях");  
 const ratedollar = 39.5;
 let summadollar =summahrvn/ratedollar;
 alert(summadollar.toFixed(2) + `доларів`);

  const red = parseInt(prompt("Введіть значення червоного (red) кольору від 0 до 255:"), 10);
  const green = parseInt(prompt("Введіть значення зеленого (green) кольору в десятковій системі:"), 10);
  const blue = parseInt(prompt("Введіть значення синього (blue) кольору від 0 до 255:"), 10);

// Переведення в шістнадцяткову систему
  const hexRed = red.toString(16).padStart(2, '0');
  const hexGreen = green.toString(16).padStart(2, '0');
  const hexBlue = blue.toString(16).padStart(2, '0');

  const cssColor = `#${hexRed}${hexGreen}${hexBlue}`;

  console.log(`CSS-колір: ${cssColor}`);
 
 
 let floors = prompt("Введіть кількість поверхів у будинку:");
 let apartmentsPerFloor = prompt("Введіть кількість квартир на поверсі:");
 let apartmentNumber = prompt("Введіть номер квартири:");
 const apartmentsPerEntrance = floors * apartmentsPerFloor;
 const entranceNumber = Math.ceil(apartmentNumber / apartmentsPerEntrance);
 const apartmentNumberInEntrance = (apartmentNumber - 1) % apartmentsPerEntrance + 1;
 const floorNumber = Math.ceil(apartmentNumberInEntrance / apartmentsPerFloor);
 console.log(`Квартира №${apartmentNumber} розташована в ${entranceNumber}-м під'їзді на ${floorNumber}-м поверсі.`);
         


function App() {
  return (    
    <div className="App">
          
         
         
         

         
         
        
    
          
         
      






  
</div>
  );
}
export default App;
