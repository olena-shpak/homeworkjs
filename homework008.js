import logo from './logo.svg';
import './App.css';
let a = 10
{
    let b = 20
    {
        let c = 30
        //які тут будуть значення змінних a=100, b=21, c=30 ( d)-ще не оголошені
        
        b++
        a *= 10
        console.log(a,b,c)
    }
    {
        let c = 50
        //які тут будуть значення змінних a=100, b=521, c=50, d
        b += 500
         console.log(a,b,c)
    }
    {
        const a = 100500
        const d = "value"
        //які тут будуть значення змінних a=100500, b=521, c, d= "value"
         console.log(a,b,d)
        {
            let a = -50
            b     = 1000
             console.log(a,b)
            //які тут будуть значення змінних a=-50, b=1000, c, d
        }
         console.log(a,b)
        //які тут будуть значення змінних a=100, b=1000, c, d
    }
     console.log(a,b)
    //які тут будуть значення змінних a=100, b, c, d
}console.log(a)






var age = + prompt ("Скільки вам років?", "");
if(age > 0 && age < 6){
    alert("чи немовля, чи дошкілнятко");}
    else {if (age < 18) {
    alert("школяр");
}
else {if (age > 18 && age < 30){
    alert("молодь");
}
else {if (age > 30 && age < 45){
    alert("зрілість");
}
else {if (age > 45 && age < 60){
    alert("захід сонця");
}
else {if (age > 60) {
    alert("як пенсія?");
}
 
}}}}}



const userInput = prompt("Введіть свій розмір у нашій системі (наприклад, 40, 42, 44, 46, 48, 50, 52, 54):");
switch(userInput){
    case "40": console.log("Ваш розмір у американській системі:6 ") 
    break;
    case "42": console.log("Ваш розмір у американській системі:8 ") 
    break;
case "44": console.log("Ваш розмір у американській системі:10 ")
break;
 case "46": console.log("Ваш розмір у американській системі:12 ")
 break;
 case "48": console.log("Ваш розмір у американській системі:14 ")
 break;
case "50": console.log("Ваш розмір у американській системі:16 ")
break;
case "52": console.log("Ваш розмір у американській системі:18 ")
break;
case "54": console.log("Ваш розмір у американській системі:20 ")
break;
default:
         console.log('Не відомий розмір')
}



let color1 = prompt("Введіть колір","");
if (color1==="red") {
  document.write("<div style='background-color: red;'>червоний</div>"),  
  document.write("<div style='background-color: black; color: white;'>чорний</div>");}
else if (color1==="black") { document.write("<div style='background-color: black; color: white;'>чорний</div>");}
else if (color1==="blue") {document.write("<div style='background-color: blue;'>синій</div>"),
                           document.write("<div style='background-color: green;'>зелени й</div>");}
else if (color1==="green") {document.write("<div style='background-color: green;'>зелени й</div>");}
            
 else { document.write("<div style='background-color: gray;'>Я не зрозумів</div>");}



 const noSwitch = (key, cases, defaultKey = 'default') => {
    if (key in cases) {
        const result = typeof cases[key] === 'function' ? cases[key]() : cases[key];
        return result;
    } else {
        if (defaultKey in cases) {
            const result = typeof cases[defaultKey] === 'function' ? cases[defaultKey]() : cases[defaultKey];
            return result;
        } else {
             console.error(`Key "${key}" not found, and default key "${defaultKey}" is also not found.`);
        }
    }
}
const drink = prompt("Що ви любите пити")
noSwitch(drink, {
    воду: () => console.log('Найздоровіший вибір!'),
    чай(){
        console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
    },
    "пиво": () => console.log('Добре влітку, та в міру'),
    віскі: function(){
        console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
    },
    default(){
        console.log('шото я не зрозумів')
    }
})





fetch('https://open.er-api.com/v6/latest/USD')
.then(res => res.json())
.then(data => {
    const buttonContainer = document.createElement('div');
    
    for (const currency in data.rates) {
        const btn = document.createElement('button');
        btn.innerText = currency;
        
        btn.onclick = () => {
            const amount = prompt(`Введіть суму для конвертації ${currency}:`);

            if (!isNaN(amount)) {
                const convertedAmount = amount / data.rates[currency];
               
                console.log(convertedAmount.toFixed(2) + ' ' + 'USD');
            } else {
                console.log('Неправильні дані. Введіть дійсну суму.');
            }
        };

        buttonContainer.appendChild(btn);
    }

    document.body.appendChild(buttonContainer);
    console.log(data);
})
.catch(error => console.error('Помилка отримання даних:', error));


// файл:closure calc 2-hw008.html @ countries-and-cities-hm008.html



     







function App() {
  return (    
    <div className="App">
          
         
         
         

         
         
        
    
          
         
      






  
</div>
  );
}
export default App;
