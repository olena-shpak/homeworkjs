import logo from './logo.svg';
import './App.css';

const answer1 =[confirm("Ви любите пити каву?"), confirm("Вам подобається зима?"), confirm("Вам уже є 18 років?")];
console.log(answer1)
["Вам є 18 років?", "Ви бували у Стамбулі?", "Каву пити будете?"].map (confirm)

const arr =[prompt("Яка зараз пора рока на дворі?"), prompt("Коли ви в остання їздили на море?"), prompt("Скільки у вас дітей?")];
console.log(arr[1])
arr[1]

const index1 =[prompt("Введіть три ваші улюблені фільми через кому")];
console.log(index1[2]);
console.log(index1.length);

const arr1 = [prompt("Введіть ваш вік"), prompt("Ваше ім'я"), prompt("Ваш улюблений напій")];
arr1[3] ="friend";
arr1[2] = "cola";
console.log(arr1)

const multiplicationTable = [[0, 0, 0, 0, 0],
                             [0, 1, 2, 3, 4],
                             [0, 2, 4, 6, 8],
                             [0, 3, 6, 9, 12],
                             [0, 4, 8, 12, 16]]
console.log(multiplicationTable);


const tableWithoutZeros = multiplicationTable.map(row =>
  row.slice().filter(element => element !== 0))
  console.log(tableWithoutZeros);



const userInput = prompt("Введіть рядок із кількома словами:");
const searchWord = prompt("Введіть слово, яке ви хочете знайти в рядку:");
const wordsArray = userInput.split(' ');
const wordIndex = wordsArray.indexOf(searchWord) + 1;
if (wordIndex) {
  alert(`Слово + "${searchWord}" + знаходиться на  +${wordIndex}-м місці в рядку.`);
} else {
  alert(`Слово +"${searchWord}"+ не знайдено в рядку.`);}


  const user = [prompt("Введіть своє ім'я")];
  user.push(prompt('user1'), prompt('user2'), prompt('user3'), prompt('user4'), prompt('user5'));
  console.log(user)
  user1 = user.pop(5);
  user2 = user.pop(4);
  user3 = user.pop(3);
  user4 = user.pop(2);
  user5 = user.pop(1);
  user6 = user.pop(0);
  user.push(user1, user2, user3, user4, user5, user6)
  console.log(user) 
   const reversed = user.reverse()  

  us1 = user.shift();
  us2 = user.shift();
  us3 = user.shift();
  us4 = user.shift();
  us5 = user.shift();
  us6 = user.shift();
  let usern = user.unshift(us6, us5, us4, us3, us2, us1 );
  console.log(user)

  let multiplicationTable1= multiplicationTable.slice(3);
  console.log(multiplicationTable1)

  let newmultiplicationTable = [...multiplicationTable];
  console.log(newmultiplicationTable);

  let arr4 = [prompt('яка пора року '), prompt('яка погода'), prompt('яка частина доби')];
  const arr5 = arr4;
  arr5.push("ура");
  arr5.push("Ups");
  console.log(arr4);
  arr4 === arr5;
  console.log(arr5);


  let bigtable =[...multiplicationTable, ...tableWithoutZeros, ...newmultiplicationTable, ...multiplicationTable1]
  console.log(bigtable);

  const inputString = prompt("Введіть рядок:");
  const [first, , , , fifth, , , , ninth] = inputString;
  console.log(inputString);
  console.log("Перша літера:", first);
  console.log("П'ята літера:", fifth);
  console.log("Дев'ята літера:", ninth);

  const useranswer = prompt('Введіть рядок:');
  const [, secondLetter = '!', , fourthLetter = '!', fifthLetter = '!'] = useranswer;
  console.log(useranswer)
  console.log(`Друга літера: ${secondLetter}`);
  console.log(`Четверта літера: ${fourthLetter}`);
  console.log(`П'ята літера: ${fifthLetter}`);

  
  const tableWithoutZeros1 = multiplicationTable.map(row => {
  const [first, ...rest] = row;
  return rest.filter(element => element !== 0);
});
  const flattenedTable = [].concat(...tableWithoutZeros1);
  console.log(flattenedTable);


  const names = ["John", "Paul", "George", "Ringo"];
for (const name of names) {
     alert(`Hello, ${name}`)
}

const currencies = ["USD", "EUR", "GBP", "UAH"]
let   str = "<select>"
for (const currency of currencies){
       str += `<option value="${currency}">${currency}</option>`;
}
str+= "</select>"
document.write(str)


const names1 = ["John", "Paul", "George", "Ringo"];
let str1 = "<table>";

for (const name of names1) {
    str1 += "<td>" + name + "</td>";
}

str1 += "</table>";
document.write(str1);


const currencies1 = ["USD", "EUR", "GBP", "UAH"];
let str2 = "<table>";

for (const currency of currencies1) {
    str2 += "<tr>"; 

    for (const letter of currency) {
        str2 += "<td>" + letter + "</td>"; 
    }

    str2 += "</tr>"; 
}
str2 += "</table>";
document.write(str2);



let str3 = "<table>";

for (let rowIndex = 0; rowIndex < multiplicationTable.length; rowIndex++) {
  str3 += "<tr>";

  for (let colIndex = 0; colIndex < multiplicationTable[rowIndex].length; colIndex++) {
    const result = multiplicationTable[rowIndex][colIndex];
    const backgroundColor = rowIndex % 2 === 0 ? "red" : "green";

    str3 += `<td style="background-color: ${backgroundColor}">${result}</td>`;
  }

  str3 += "</tr>";
}
str3 += "</table>";
document.write(str3);

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

let userInput2 = prompt("Введіть рядок:");
let result = capitalize(userInput2);
console.log(result);


const capitalize2 = stroka => {
  return stroka.charAt(0).toUpperCase() + stroka.slice(1).toLowerCase();
};

let userInput3 = prompt("Введіть рядок:");
let wordsArray1 = userInput3.split(" ");
console.log(userInput3)
console.log(wordsArray1)
let capitalizedArray = wordsArray1.map(word => capitalize2(word));
console.log(capitalizedArray)
let resultString = capitalizedArray.join(" ");
console.log(resultString);


const allowedWords = ["яблуко", "апельсин", "банан", "груша"];
const isAllowed = word => !allowedWords.includes(word.toLowerCase());

let fruit = prompt("Введіть фрукти ваші улюблені:");
let fruitArray = fruit.trim().split(/\s+/);
console.log(fruit);
console.log(fruitArray);
let filteredArray = fruitArray.filter(word => isAllowed(word));

let result6 = filteredArray.length === fruitArray.length;
console.log(result6);
let resultString1 = [filteredArray.join(" ")];
console.log(resultString1);


const forbiddenWords = ["дурак", "клоун", "злий"];
const censorWords = userwords => {
  let wordsArray = userwords.split(" ");
  let censoredArray = wordsArray.map(word =>
    forbiddenWords.includes(word.toLowerCase()) ? "BEEP" : word
  );

  let resultString = censoredArray.join(" ");
  return resultString;
};
let userwords = prompt("опишіть кількома словами людину що вам не подобається:");
let censoredResult = [censorWords(userwords)];
console.log(censoredResult);


const currencies2 = ["USD", "EUR", "GBP", "UAH"];
let str5 = "<select>";

str5 += currencies2.reduce((a, b) => a + `<option value="${b}">${b}</option>`, "");

str5 += "</select>";

document.body.innerHTML = str5;



const line = prompt();
const bracketsStack = [];
let i = 0;

for (const character of line) {
    if (character === '(' || character === '[' || character === '{') {
        bracketsStack.push({ character, index: i });
    } else if (character === ')' || character === ']' || character === '}') {
        if (bracketsStack.length === 0) {
            alert(`Помилка: невідповідна закриваюча дужка в позиції ${i}`);
            break;
        }

        const lastOpeningBracket = bracketsStack.pop();
        if (
            (character === ')' && lastOpeningBracket.character !== '(') ||
            (character === ']' && lastOpeningBracket.character !== '[') ||
            (character === '}' && lastOpeningBracket.character !== '{')
        ) {
            alert(`Помилка: невідповідна закриваюча дужка в позиції ${i}`);
            break;
        }
    }
    i++;
}

if (bracketsStack.length > 0) {
    const lastUnclosedBracket = bracketsStack.pop();
    alert(`Помилка: невідповідна відкриваюча дужка в позиції ${lastUnclosedBracket.index}`);
} else {
    alert("Дужки підібрані правильно!");
}



function App() {
  return (    
    <div className="App">
          
         
         
         

         
         
        
    
          
         
      






  
</div>
  );
}
export default App;
