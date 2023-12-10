import logo from './logo.svg';
import './App.css';

let number1 = prompt("Введіть будь-яке число");
if(+number1 % 2 ==0) { alert(number1)} else { alert("Введене число не є парним.")}

let text = prompt("Введіть текст, використовуючи літери та цифри");
text.indexOf("234");
let text1 = prompt("Введіть текст, використовуючи літери та цифри");
text1.includes("fghhj");

const message = confirm('Чи ти чув сьогодні вибух?') ? "Так, було трохи чути" : "Ні, я солодко спав"
alert(message)

if (confirm("Ви жінка?"))  {alert("Ви жінка")} else{alert("Ви чоловік")}

let userInput = prompt("Введіть свій розмір у нашій системі (наприклад, 40, 42, 44, 46, 48, 50, 52, 54):");
if (userInput === "40") {  sizeInAmericanSystem = "6";
} else if (userInput === "42") {
    sizeInAmericanSystem = "8";
} else if (userInput === "44") {
    sizeInAmericanSystem = "10";
} else if (userInput === "46") {
    sizeInAmericanSystem = "12";
} else if (userInput === "48") {
  sizeInAmericanSystem = "14";
}else if (userInput === "50") {
  sizeInAmericanSystem = "16";
}else if (userInput === "52") {
  sizeInAmericanSystem = "18";
}else if (userInput === "54") {
  sizeInAmericanSystem = "20";
}

else {
    sizeInAmericanSystem = 
    sizeInAmericanSystem = 
"Не відомий розмір";
}

alert("Ваш розмір у американській системі: " + sizeInAmericanSystem);



alert(confirm("Ви жінка?") ? 'Ви жінка' : "Ви чоловік")

prompt("Введіть скільки вам повних років")||alert("Ви ввели некоректне значення")

confirm("шопінг?")|| alert("ти - бяка")

let question = confirm("шопінг?");
if (question) {alert("Yehoo!!")}
else{alert("ти - бяка")}

prompt("Введіть прізвище") || alert("Іванов");
prompt("Введіть ім'я") || alert("Іван");
prompt("Введіть по-батькові") || alert ("Іванович");

let Prizvishe = prompt("Введіть прізвище");
if (Prizvishe) {alert(Prizvishe)} else {alert("Іванов")};
let naMe = prompt("Введіть ім'я");
if (naMe){alert(naMe)} else {alert("Іван")};
let Pobatkovi = prompt("Введіть по-батькові");
if (Pobatkovi) {alert(Pobatkovi)} else {alert ("Іванович")}

let login = prompt("Для ідентифікації Введіть ваш логін");
if (login === "admin") {let password = prompt("Введіть ваш пароль"); 
if (password === "qwerty") {alert("Ласкаво просимо, " + login + "!");} else {alert("Вибачте це невірний пароль");} } else{alert("Вибачте це невірний логін")}

var currency = prompt("Введіть валюту (наприклад, USD, EUR):").toUpperCase();

var isBuying = confirm("Ви хочете купити?");
var rate;
if (currency === "USD") {
    rate = isBuying ? 
    
27.5 : 27.0;
} else if (currency === "EUR") {
    rate = isBuying ? 32.0 : 31.5;
} 

else {
    alert("Вибачте, така валюта не підтримується.");
    
    throw new Error("Непідтримувана валюта");
}

var amount = parseFloat(prompt("Введіть суму для обміну:"));
var result = isBuying ? amount / rate : amount * rate;
alert("Результат обміну: " + result.toFixed(2) + " " + (isBuying ?  (currency)  : "грн"));


let userChoice = prompt("Введіть ваш варіант: камінь, ножиці чи папір").toLowerCase();

let computerChoices = ["камінь", "ножиці", "папір"];
let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

alert("Варіант програми: " + computerChoice);
var winner;
if (userChoice === computerChoice) {
    winner = "Нічия";
} else if (
    (userChoice === "камінь" && computerChoice === "ножиці") ||
    (userChoice === "ножиці" && computerChoice === "папір") ||
    (userChoice === "папір" && computerChoice === "камінь") 
  
) {
    winner = "Ви переможець!";
} else {
    winner = 
    win
"Програма переможець!";
}
alert(winner);


let taskNumber = prompt("Введіть номер завдання (1-13):");

if (taskNumber === "1") {
  let number1 = prompt("1. Введіть будь-яке число");
  if (+number1 % 2 === 0) {
    alert(number1);
  } else {
    alert("Введене число не є парним.");
  }
}

// Task 2
else if (taskNumber === "2") {
  let text = prompt("2. Введіть текст, використовуючи літери та цифри");
  text.indexOf("234");
  let text1 = prompt("2.1 Введіть текст, використовуючи літери та цифри");
  text1.includes("fghhj");
}

// Task 3
else if (taskNumber === "3") {
  const message = confirm('3. Чи ти чув сьогодні вибух?') ? "Так, було трохи чути" : "Ні, я солодко спав";
  alert(message);
}

// Task 4
else if (taskNumber === "4") {
  if (confirm("4. Ви жінка?")) {
    alert("Ви жінка");
  } else {
    alert("Ви чоловік");
  }
}

// Task 5
else if (taskNumber === "5") {
  let userInput = prompt("5. Введіть свій розмір у нашій системі (наприклад, 40, 42, 44, 46, 48, 50, 52, 54):");
  let sizeInAmericanSystem;

  if (userInput === "40") {
    sizeInAmericanSystem = "6";
  } else if (userInput === "42") {
    sizeInAmericanSystem = "8";
  } else if (userInput === "44") {
    sizeInAmericanSystem = "10";
  } else if (userInput === "46") {
    sizeInAmericanSystem = "12";
  } else if (userInput === "48") {
    sizeInAmericanSystem = "14";
  } else if (userInput === "50") {
    sizeInAmericanSystem = "16";
  } else if (userInput === "52") {
    sizeInAmericanSystem = "18";
  } else if (userInput === "54") {
    sizeInAmericanSystem = "20";
  } else {
    sizeInAmericanSystem = "Не відомий розмір";
  }

  alert("Ваш розмір у американській системі: " + sizeInAmericanSystem);
}

// Task 6
else if (taskNumber === "6") {
  alert(confirm("6. Ви жінка?") ? 'Ви жінка' : "Ви чоловік");
}

// Task 7
else if (taskNumber === "7") {
  prompt("7. Введіть скільки вам повних років") || alert("Ви ввели некоректне значення");
}

// Task 8
else if (taskNumber === "8") {
  confirm("8. Шопінг?") || alert("Ти - бяка");
}

// Task 9
else if (taskNumber === "9") {
  let question = confirm("9. Шопінг?");
  if (question) {
    alert("Yehoo!!");
  } else {
    alert("Ти - бяка");
  }
}

// Task 10
else if (taskNumber === "10") {
  let Prizvishe = prompt("10. Введіть прізвище");
  if (Prizvishe) {
    alert(Prizvishe);
  } else {
    alert("Іванов");
  }
  let naMe = prompt("10.1 Введіть ім'я");
  if (naMe) {
    alert(naMe);
  } else {
    alert("Іван");
  }
  let Pobatkovi = prompt("10.2 Введіть по-батькові");
  if (Pobatkovi) {
    alert(Pobatkovi);
  } else {
    alert("Іванович");
  }
}

// Task 11
else if (taskNumber === "11") {
  let login = prompt("11. Для ідентифікації Введіть ваш логін");
  if (login === "admin") {
    let password = prompt("11.1 Введіть ваш пароль");
    if (password === "qwerty") {
      alert("Ласкаво просимо, " + login + "!");
    } else {
      alert("Вибачте це невірний пароль");
    }
  } else {
    alert("Вибачте це невірний логін");
  }
}

// Task 12
else if (taskNumber === "12") {
  var currency = prompt("12. Введіть валюту (наприклад, USD, EUR):").toUpperCase();
  var isBuying = confirm("12.1 Ви хочете купити?");
  var rate;

  if (currency === "USD") {
    rate = isBuying ? 27.5 : 27.0;
  } else if (currency === "EUR") {
    rate = isBuying ? 32.0 : 31.5;
  } else {
    alert("Вибачте, така валюта не підтримується.");
    throw new Error("Непідтримувана валюта");
  }

  var amount = parseFloat(prompt("12.2 Введіть суму для обміну:"));
  var result = isBuying ? amount / rate : amount * rate;
  alert("Результат обміну: " + result.toFixed(2) + " " + (isBuying ? (currency) : "грн"));
}

// Task 13
else if (taskNumber === "13") {
  let userChoice = prompt("13. Введіть ваш варіант: камінь, ножиці чи папір").toLowerCase();
  let computerChoices = ["камінь", "ножиці", "папір"];
  let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  alert("Варіант програми: " + computerChoice);
  var winner;

  if (userChoice === computerChoice) {
    winner = "Нічия";
  } else if (
    (userChoice === "камінь" && computerChoice === "ножиці") ||
    (userChoice === "ножиці" && computerChoice === "папір") ||
    (userChoice === "папір" && computerChoice === "камінь")
  ) {
    winner = "Ви переможець!";
  } else {
    winner = "Програма переможець!";
  }

  alert(winner);
}


const userChoice1 = prompt("Введіть ваш варіант: камінь, ножиці чи папір").toLowerCase();
const computerChoice1 = ["камінь", "ножиці", "папір"][Math.floor(Math.random() * 3)];

const result1 =
  userChoice1 === computerChoice1 && "Нічия" ||
  (userChoice1 === 
  (userChoice1 === 
"камінь" && computerChoice1 === "ножиці" ||
   userChoice1 === "ножиці" && computerChoice1 === "папір" ||
   userChoice1 === "папір" && computerChoice1 === "камінь") && "Ви переможець!" ||
  "Програма переможець!");

alert(`Ваш варіант: ${userChoice1}\nВаріант програми: ${computerChoice1}\nРезультат: ${result1}`);











function App() {
  return (    
    <div className="App">
          
         
         
         

         
         
        
    
          
         
      






  
</div>
  );
}
export default App;
