import logo from './logo.svg';
import './App.css';

const convertTemperature = (temperature, fromUnit, toUnit) => {
    if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
      return (temperature * 9/5) + 32;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
      return (temperature - 32) * 5/9;
    } else {
      
      return null; 
    }
  };
  
  let celsiusTemperature = +prompt('Введіть значення температури за вікном в градусах Цельсія');
  let fahrenheitTemperature = convertTemperature(celsiusTemperature, 'Celsius', 'Fahrenheit');
  console.log(fahrenheitTemperature);
    // let fahrenheitTemperature = +prompt('Введіть значення температури за вікном в градусах Фарінгейтах');
    // let celsiusTemperature = convertTemperature(fahrenheitTemperature,'Fahrenheit', 'Celsius');
    // console.log(celsiusTemperature ); -цей виклик функції коли потрібно конвертувати з фарінгейту в цельсій

    
    const color = (r, g, b) => `#${(r < 16 ? '0' : '') + r.toString(16)}${(g < 16 ? '0' : '') + g.toString(16)}${(b < 16 ? '0' : '') + b.toString(16)}`.slice(0, 7);
    console.log(color(prompt('Enter red value'), prompt('Enter green value'), prompt('Enter blue value')));


    const getApartmentLocation = (floors, apartmentsPerFloor, apartmentNumber) => {
        const apartmentsPerEntrance = floors * apartmentsPerFloor;
        const entranceNumber = Math.ceil(apartmentNumber / apartmentsPerEntrance);
        const apartmentNumberInEntrance = (apartmentNumber - 1) % apartmentsPerEntrance + 1;
        const floorNumber = Math.ceil(apartmentNumberInEntrance / apartmentsPerFloor);
      
        return { entrance: entranceNumber, floor: floorNumber };
      };
      
      let floors = prompt("Введіть кількість поверхів у будинку:");
      let apartmentsPerFloor = prompt("Введіть кількість квартир на поверсі:");
      let apartmentNumber = prompt("Введіть номер квартири:");
      
      const result = getApartmentLocation(parseInt(floors), parseInt(apartmentsPerFloor), parseInt(apartmentNumber));
      console.log(result);

      

      const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const credentials = () => {
  let userName = prompt("Введіть ім'я");
  let userSurname = prompt("Введіть прізвище");
  let userFatherName = prompt("Введіть по батькові");

  let fullName = capitalize(userName) + ' ' + capitalize(userSurname) + ' ' + capitalize(userFatherName);

  return { name: capitalize(userName), surname: capitalize(userSurname), fatherName: capitalize(userFatherName), fullName: fullName };
};

let userCredentials = credentials();
console.log(userCredentials);

   
const newLine = (inputString) => {
  let linesArray = inputString.split("\\n");
  let resultString = linesArray.join("\n");
  return resultString;
};

let userInput = prompt("Введіть інформацію для нового рядку, використовуючи \\n");
let stringWithLineBreaks = newLine(userInput);
console.log(stringWithLineBreaks);


const age = (userInput) => console.log(userInput || alert("Ви ввели некоректне значення"));
age(prompt("Введіть скільки вам повних років") || "18");

 
const credentials1 = {
  login: 'admin',
  password: 'qwerty',
};

let checkCredentials1 = (login, password) => {
  if (login === credentials1.login || password === credentials1.password) {
    return true;
  } else {
    return false;
  }
};

let enteredLogin = prompt('Enter your username:');
let enteredPassword = prompt('Enter your password:');
let result2 = checkCredentials1(enteredLogin, enteredPassword);
console.log(result2);




let MultiplicationTableHTML= (multiplicationTable) => {
  let htmlString = "<table>";

  for (let rowIndex = 0; rowIndex < multiplicationTable.length; rowIndex++) {
    htmlString += "<tr>";

    for (let colIndex = 0; colIndex < multiplicationTable[rowIndex].length; colIndex++) {
      const result = multiplicationTable[rowIndex][colIndex];
      const backgroundColor = rowIndex % 2 === 0 ? "blue" : "yellow";

      htmlString += `<td style="background-color: ${backgroundColor}">${result}</td>`;
    }

    htmlString += "</tr>";
  }

  htmlString += "</table>";
  return htmlString;
}

const multiplicationTable = [[0, 0, 0, 0, 0],
                             [0, 1, 2, 3, 4],
                             [0, 2, 4, 6, 8],
                             [0, 3, 6, 9, 12],
                             [0, 4, 8, 12, 16]]

const tableHTML = MultiplicationTableHTML(multiplicationTable);
document.write(tableHTML);
  

const forbiddenWords = ["бляха", "муха", "пляшка", "шабля"];
const censorWords = userwords => {
  let wordsArray = userwords.split(" ");
  let censoredArray = wordsArray.map(word =>
    forbiddenWords.includes(word.toLowerCase()) ? "" : word
  );

  let resultString = censoredArray.join(",");
  return resultString;
};
let userwords = prompt("опишіть кількома словами людину що вам не подобається:");
let censoredResult = censorWords(userwords);
console.log(censoredResult);



  const generateCurrencyTable = data =>  {console.log(data);
                  const currencies = Object.keys(data.rates);
                  let table = '<table border="1">';
                   table += '<tr>';
                     table += '<th>Currency</th>';
                     for (const currency of currencies) {
                         table += `<th>${currency}</th>`;
                     }
                     table += '</tr>';
                     for (const currency1 of currencies) {
                         table += `<tr>`;
                         table += `<td>${currency1}</td>`;
                         
                         for (const currency2 of currencies) {
                             const exchangeRate1 = data.rates[currency1];
                             const exchangeRate2 = data.rates[currency2];
                             const crossRate = exchangeRate2 / exchangeRate1;
                             
                             table += `<td>${crossRate.toFixed(3)}</td>`;
                         }
             
                         table += `</tr>`;
                     }
             
                     table += '</table>';
                     
                     
                     document.write(table);
                 }
    fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(generateCurrencyTable)



    const createFormForCar = (car) => {
                let formHtml = '<form>';
               for (const key in car) {
               if (car.hasOwnProperty(key)) {
             const value = car[key];
             const inputType = typeof value === 'string' ? "text" :
             typeof value === 'number' ? "number" :
             typeof value === 'boolean' ? "checkbox" : "";
             const checkboxChecked = inputType === 'checkbox' && value ? 'checked' : '';
             formHtml +=  `<label>${key}: <input type="${inputType}" value="${value}" ${checkboxChecked}/></label><br>`;
          }
        }
           formHtml += '</form>';
          return formHtml;};
    const car = {
            "Name": "chevrolet chevelle malibu",
            "Cylinders": 8,
            "Displacement": 307,
            "Horsepower": 130,
            "Weight_in_lbs": 3504,
            "Origin": "USA",
            "in_production": false
            };
    document.write(createFormForCar(car));         



    function sort(array, field, ascending = true) {
      const sortOrder = ascending ? 1 : -1;
        array.sort((a, b) => {
        const valueA = a[field];
        const valueB = b[field];
          if (valueA < valueB) {
          return -1 * sortOrder;
        } else if (valueA > valueB) {
          return 1 * sortOrder;
        } else {
          return 0;
        }
      });
    }
    var persons = [
      { name: "Іван", age: 17 },
      { name: "Марія", age: 35 },
      { name: "Олексій", age: 73 },
      { name: "Яків", age: 12 },
    ];
    sort(persons, "age");
    console.log(persons);
    
    sort(persons, "name", false);
    console.log(persons);

{<input type='number' id="firstNumber" />
<input type='number' id="secondNumber" />
<div id="divisionResult">
    текст у div
</div>
<script>
    const calcResult = () => {
        console.log(firstNumber.value, secondNumber.value, divisionResult.innerHTML)
        divisionResult.innerHTML = "Текст у <code>div</code> змінено за допомогою <strong>Javascript</strong><br/>" + Math.random()
    }
    
    firstNumber.oninput = secondNumber.oninput = calcResult
</script>}




    let tarif = 7.96;
    let summa = (input1, input2) => {
    let result3 = (input2 - input1) * tarif;
    return result3;
}
    let previousValue = parseFloat(prompt('Input previous value'));
    let nextValue = parseFloat(prompt('Input next value'));
    let result3 = summa(previousValue, nextValue);
    console.log(result3);






function App() {
  return (    
    <div className="App">
          
         
         
         

         
         
        
    
          
         
      






  
</div>
  );
}
export default App;
