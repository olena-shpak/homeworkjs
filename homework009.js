import logo from './logo.svg';
import './App.css';


let i = 0
while (confirm('Хочете ще раз нажати Ок?')) {
     alert('Тоді продовжуємо')
     i++
}
alert(`Вам набридло за ${i} разів.`)


{let arr = [];
while (arr !== null) {
   let userInput = prompt('Введіть текст')

   if (userInput === null){ 
        break 
    }
    arr.push(userInput)
}
        console.log(arr)}



{let arr =[];
    let i = 0;
    while (arr !== null && i !== null){
    let userInput = prompt('Введіть текст');
    
    if (userInput === null) {
        break;
    }

    arr[i] = userInput;
    i++;
}

console.log(arr);}


{let i = 0;

    while (i !== null) {
        i++;
    
        if (Math.random() > 0.9) {
            break;
        }
    }
    
    alert(`Кількість ітерацій: ${i}`);  
    }


    {  
        let i = 0;
        while ( i !== null){
         userInput = prompt('Введіть текст');
        
        if (userInput === null) {
            continue;
        }
       break
    }
    
    console.log(i);} 


    let N = prompt('Введіть N');
    let sum = 0;
    for (let i = 0; i <= N; i+=3){sum += i}
    console.log(`Сума арифметичної прогресії від 1 до ${N} з кроком 3: ${sum}`);


    let length = prompt('Введіть довжину рядка:');
    let str = '';
    for (i=0; i<length; i++){str+='#'}
    console.log(str)


    let str2 ='';
    for (let i=0; i<10 ; i++)
            {for(j=0; j<10; j++)
                {str2 +=j}
        str2 += '\n'}
    console.log(str2)


    {let length = prompt('Введіть довжину рядка:');
        let str2 ='';
    for (let i=0; i<length ; i+='#.')
            {for(j=0; j> length; j+='.#')
                {str2 +=j}
        str2 += '\n'}
    console.log(str2)}


    {let str =prompt('введіть кількість строк')
    let col =prompt('введіть кількість стовпців')
    let str2 ='';
    for(let i=0; i < str; i++){
        for(let j=0; j < col; j++) {if ((i+j)%2 ===0){str2+="."}
                                    else{str2+="#"}
            
        }str2+="\n"
    }console.log(str2)}


    {let arr2 = [];
        let N = prompt('Введіть кількість елементів:');
        
        for (let i = 0; i < N; i++) {
            arr2[i] = i ** 3;
        }
        
        console.log(arr2);}


    {   let rows =10;
        let cols=10;
        let multiplicationTable =[];
        for(let i=1; i<=rows; i++){multiplicationTable[i-1]=[];
            for(j=1; j<=cols; j++){multiplicationTable[i-1][j-1]=i*j}}
    console.log(multiplicationTable)
    }    


    const readArrayOfObjects = () => {
        const arrayOfObjects = [];
    
        while (arrayOfObjects !== null ) {
            const obj = {};
            let key;
            while (key !== null) {
                key = prompt('Введіть ключ');
                    if (key === null) {
                    break; 
                 }
    
                const value = prompt(`Введіть значення для ключа "${key}":`);
                obj[key] = value;
            }
    
            arrayOfObjects.push(obj);
            const shouldContinue = confirm("Хочете ввести ще один об'єкт?");
            
            if (!shouldContinue) {
                break; 
            }
        }
    
        return arrayOfObjects;
    };
    const resultArray = readArrayOfObjects();
    console.log(resultArray);
    

    const generateDiamond = (size) => {
            if (size % 2 === 0) {
            size++; 
        }
      for (let i = 1; i <= size; i += 2) {
            const spaces = '.'.repeat((size - i) / 2);
            const hashes = '#'.repeat(i);
            console.log(spaces + hashes + spaces);
        }
         for (let i = size - 2; i >= 1; i -= 2) {
            const spaces = '.'.repeat((size - i) / 2);
            const hashes = '#'.repeat(i);
            console.log(spaces + hashes + spaces);
        }
    };
     generateDiamond(11);
    
    


       const table = document.createElement("table");
             for (let i=0; i<10; i++){
            const row = document.createElement("tr");
        
        for(let j=0; j<10; j++){
        const cell = document.createElement('td')
         if (i ===0 && j ===0)
        {cell.innerText = '0'; }
        else if(i===0) {cell.innerText = j;}
        else if( j ===0){cell.innerText = i;}
        else{ cell.innerText = i*j;}
        row.appendChild(cell)
     }
     table.appendChild(row);}
     document.body.appendChild(table);





    { const table = document.createElement("table");
    for (let i=0; i<10; i++){
    const row = document.createElement("tr");

    for(let j=0; j<10; j++){
    const cell = document.createElement('td')
    if (i ===0 && j ===0)
    {cell.innerText = '0'; }
    else if(i===0) {cell.innerText = j;}
    else if( j ===0){cell.innerText = i;}
    else{ cell.innerText = i*j;}
    cell.addEventListener('mouseover', function(){
        this.style.backgroundColor = 'green';
    })
    cell.addEventListener('mouseout', function(){
        this.style.backgroundColor = '';
    })
    row.appendChild(cell)
    }
    table.appendChild(row);}
    document.body.appendChild(table);}







{const table = document.createElement("table");

for (let i = 0; i < 10; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('td');

        if (i === 0 && j === 0) {
            cell.innerText = '0';
        } else if (i === 0) {
            cell.innerText = j;
        } else if (j === 0) {
            cell.innerText = i;
        } else {
            cell.innerText = i * j;
        }

        cell.addEventListener('click', function () {
           
            for (let k = 0; k < 10; k++) {
                table.rows[k].classList.remove('highlight-row');
                table.rows[k].cells[j].classList.remove('highlight-column');
                table.rows[i].classList.remove('highlight-row');
            }

            
            for (let k = 0; k < 10; k++) {
                table.rows[k].cells[j].classList.add('highlight-column');
                table.rows[i].classList.add('highlight-row');
            }

            
            for (let k = 0; k < 10; k++) {
                for (let l = 0; l < 10; l++) {
                    table.rows[k].cells[l].style.backgroundColor = '';
                }
            }

            
            for (let k = 0; k < 10; k++) {
                table.rows[i].cells[k].style.backgroundColor = 'yellow';
                table.rows[k].cells[j].style.backgroundColor = 'yellow';
            }
        });

        row.appendChild(cell);
    }

    table.appendChild(row);
}

document.body.appendChild(table);
}





function App() {
  return (    
    <div className="App">
          
         
         
         

         
         
        
    
          
         
      






  
</div>
  );
}
export default App;
