import logo from './logo.svg';
import './App.css';

let yourName = prompt("Введіть ім'я") 
alert("Привіт, " + yourName + " !!!!")

let lineString = prompt("Введіть будь який рядок з комою");
let stroka = lineString.split(",");
let result6 = stroka.join(", блін,");
console.log(result6)

let str = prompt("Введіть рядок:"); 
let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log(result);

let str1 = prompt("Введіть рядок:").length;
let words = str1.split(' ');
alert(words)
         
let multilineString = "Ми сиділи  у кавярні пили каву з молоком та тістечком";
let lines = multilineString.split(' ').length;

let str2 = prompt("Введіть повністю своє прізвище ім'я та по батькові 3 рази підряд");
let trimmed = str2.trim( );
let result1 = trimmed.split(" ");
for (var i = 0; i < result1.length; i++) {
 result1[i] = result1[i].charAt(0).toUpperCase() + result1[i].slice(1);}
let fullname = result1.join(" ");
console.log(fullname);

let str3 = "Було жарко. Василь пив пиво вприкуску з креветками";
let word = str3.split(" ");
for (let i = 0; i < word.length; i++) {
    if (word[i] === "пиво") {
        word[i] = "чай";
    }
}
let result2 = word.join(" ");
console.log(result2);



let htmltag ='<h1>Hello world!</h1>';
let tagstart ='<';
let tagend = '>';
let startIndex =htmltag.indexOf(tagstart);
let endIndex = htmltag.indexOf(tagend, startIndex + 1);
let result3 = htmltag.slice(0, startIndex) + htmltag.slice(endIndex + 1);
console.log(result3)


let htmltag2 =' Заснули зайчики, заснули білочки <br/> і ти малесенький засни.';
    let tagStart ='<';
let tagEnd = '>';
let startindex =htmltag2.indexOf(tagStart);
let endindex = htmltag2.indexOf(tagEnd, startindex +1);
let result4 = htmltag2.slice(0, startindex) + htmltag2.slice(startindex, endindex + 1).toUpperCase() + htmltag2.slice(endindex +1);
console.log(result4)

let line = prompt("Введіть інформацію для нового рядку використовуйте /n");
let lines1 = line.split("/n");
let result5 = lines1.join("");
alert(result5)

const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
const userInput = prompt("Введіть текст з посиланням на YouTube");
const match = userInput.match(youtubeRegex);
if (match) {const videoId = match[1];
            const embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
document.write(embedCode);
} else {document.write("Посилання на YouTube не знайдено.");
}



function App() {
  return (    
    <div className="App">
          
         
         
         

         
         
        
    
          
         
      






  
</div>
  );
}
export default App;
