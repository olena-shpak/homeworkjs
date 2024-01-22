import logo from './logo.svg';
import './App.css';



const chocolate = {
  brand: 'Roshen',
  type: 'чорний'
}
console.log(chocolate)
const cat = {
  name: 'Рижик',
  roughlength: 'середня',
  color: 'рудий',
  mustache: 'довгі'
}
console.log(cat)


chocolate[prompt("Введіть першу властивість(ключ) шоколадки")] = prompt('Введіть значення для першої властивості');
chocolate[prompt("Введіть другу властивість(ключ) шоколадки")] = prompt('Введіть значення для другої властивості');
console.log(chocolate)
cat[prompt("Введіть першу властивість")] = prompt('Введіть значення для першої властивості')
cat[prompt("Введіть другу властивість")] = prompt('Введіть значення для другої властивості')
console.log(cat)

let newobj = { ...chocolate };
newobj[prompt('введіть властивість шоколадки')] = prompt('введіть значення властивості');
console.log(newobj)

let system = {
  tagName: 'body',

  children: [
    {
      tagName: 'div',
      children: [
        {
          tagName: 'span',
          children: ['Enter a data please:']
        },
        { tagName: 'br' },
        {
          tagName: 'input',
          attrs: { type: 'text', id: 'name' },
        },
        {
          tagName: 'input',
          attrs: { type: 'text', id: 'surname' },
        },
      ],
    },

    {
      tagName: 'div',
      children: [
        {
          tagName: 'button ',
          attrs: { id: "ok" },
          children: ['OK'],
        },
        {
          tagName: 'button ',
          attrs: { id: "cancel" },
          children: ['Cancel'],
        },
      ],
    },
  ],
};
let buttonText = system.children[1].children[1].children[0];
console.log(buttonText);
let secondInputId = system.children[0].children[3].attrs.id;
console.log(secondInputId)




system.children[0].parent = system;
system.children[1].parent = system;
system.children[0].children[0].parent = system.children[0];
system.children[0].children[1].parent = system.children[0];
system.children[0].children[2].parent = system.children[0];
system.children[0].children[3].parent = system.children[0];
system.children[1].children[0].parent = system.children[1];
system.children[1].children[1].parent = system.children[1];
system.children[1].children[0].children.parent = system.children[1].children[0];
system.children[1].children[1].children.parent = system.children[1].children[1];


let newIdValue = prompt('Введіть нове значення для атрибута id:');
system.children[1].children[0].attrs.id = newIdValue;
console.log(system);

const {
  children: [
    {
      children: [
        { children: [spanText] },
        ,
        ,
        {
          attrs: { id: secondInputId1 },
        },
      ],
    },
    {
      children: [,
        {
          children: [secondButtonText],
        },
      ],
    },
  ],
} = system;

console.log("Значення тексту у тезі span:", spanText);
console.log("Значення тексту в другій кнопці:", secondButtonText);
console.log("Значення атрибуту id у другому input:", secondInputId1);


let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
let [odd1, even1, odd2, even2, odd3, ...letters] = arr;
console.log(even1, even2);
console.log(odd1, odd2, odd3);
console.log(letters)


let arr2 = [1, "abc"];
let [number, [s1, s2, s3]] = arr2;
console.log(number);
console.log(s1, s2, s3)


let obj = {
  name: 'Ivan',
  surname: 'Petrov',
  children: [{ name: 'Maria' }, { name: 'Nikolay' }]
};

let { children: [{ name: name1 }, { name: name2 }] } = obj;
console.log("Ім'я першої дитини:", name1);
console.log("Ім'я другої дитини:", name2);

const { name, color, ...info } = cat;
console.log(info)


fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
  .then(data => {
    console.log(data)

    let incurency = prompt('Введіть вхідну валюту, наприклад USD, EUR, UAH  та т.і.').toUpperCase();
    let conversationcurency = prompt('Введіть  валюту,в яку відбувається конвертація, наприклад USD, EUR, UAH та т.і.').toUpperCase();
    let amount = prompt('Введіть суму у вхідній валюті');
    let result = amount * data.rates[conversationcurency];
    if (!data.rates[incurency] || !data.rates[conversationcurency]) { console.log('Некоректні дані. Будь ласка, перевірте вхідні дані.') } else {
      return result.toFixed(2);
    }
  })


fetch('https://open.er-api.com/v6/latest/USD')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let str = '<select>';
    for (const currency in data.rates) {
      str += `<option value="${currency}">${currency}</option>`;
    }
    str += '</select>';
    document.write(str);
  })

fetch('https://open.er-api.com/v6/latest/USD')
  .then(res => res.json())
  .then(data => {
    console.log(data);
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
  })


const car = {
  "Name": "chevrolet chevelle malibu",
  "Cylinders": 8,
  "Displacement": 307,
  "Horsepower": 130,
  "Weight_in_lbs": 3504,
  "Origin": "USA",
  "in_production": false
};

let formcar = '<form>';
for (const key in car) {
  if (car.hasOwnProperty(key)) {
    const value = car[key];
    const inputType = typeof value === 'string' ? "text" :
      typeof value === 'number' ? "number" :
        typeof value === 'boolean' ? "checkbox" : "text";
    const checkboxChecked = inputType === 'checkbox' && value ? 'checked' : '';
    formcar += `<label>${key}: <input type="${inputType}" value="${value}" ${checkboxChecked}/></label><br>`;
  }
}

formcar += '</form>';
console.log(formcar);




function generateTable(data) {
  const columns = [];

  data.forEach(item => {
    for (const key in item) {
      if (!columns.includes(key)) {
        columns.push(key);
      }
    }
  });

  let tableHtml = '<table border="1">';
  tableHtml += '<tr>';
  columns.forEach(column => {
    tableHtml += `<th>${column}</th>`;
  });
  tableHtml += '</tr>';

  data.forEach(item => {
    tableHtml += '<tr>';
    columns.forEach(column => {
      const value = item[column];
      tableHtml += `<td>${value !== undefined ? value : ''}</td>`;
    });
    tableHtml += '</tr>';
  });

  tableHtml += '</table>';

  return tableHtml;
}

const persons = [
  {
    name: 'Марія',
    fatherName: 'Іванівна',
    surname: 'Іванова',
    sex: 'жіноча'
  },
  {
    name: 'Миколай',
    fatherName: 'Іванович',
    surname: 'Іванов',
    age: 15
  },
  {
    name: 'Петро',
    fatherName: 'Іванович',
    surname: 'Іванов',
    married: true
  }
];

const tableHtml = generateTable(persons);
document.write(tableHtml);


function generateTable(data) {
  const columns = [];

  data.forEach(item => {
    for (const key in item) {
      if (!columns.includes(key)) {
        columns.push(key);
      }
    }
  });

  let tableHtml = '<table border="1">';
  tableHtml += '<tr>';
  columns.forEach(column => {
    tableHtml += `<th>${column}</th>`;
  });
  tableHtml += '</tr>';

  data.forEach(item => {
    tableHtml += '<tr>';
    columns.forEach(column => {
      const value = item[column];
      tableHtml += `<td>${value !== undefined ? value : ''}</td>`;
    });
    tableHtml += '</tr>';
  });

  tableHtml += '</table>';

  return tableHtml;
}

const cars = [
  {
    "Name": "chevrolet chevelle malibu",
    "Cylinders": 8,
    "Displacement": 307,
    "Horsepower": 130,
    "Weight_in_lbs": 3504,
    "Origin": "USA"
  },
  {
    "Name": "buick skylark 320",
    "Miles_per_Gallon": 15,
    "Cylinders": 8,
    "Displacement": 350,
    "Horsepower": 165,
    "Weight_in_lbs": 3693,
    "Acceleration": 11.5,
    "Year": "1970-01-01",
  },
  {
    "Miles_per_Gallon": 18,
    "Cylinders": 8,
    "Displacement": 318,
    "Horsepower": 150,
    "Weight_in_lbs": 3436,
    "Year": "1970-01-01",
    "Origin": "USA"
  },
  {
    "Name": "amc rebel sst",
    "Miles_per_Gallon": 16,
    "Cylinders": 8,
    "Displacement": 304,
    "Horsepower": 150,
    "Year": "1970-01-01",
    "Origin": "USA"
  },
];

const tableHtml1 = generateTable(cars);
document.write(tableHtml1);


function App() {
  return (
    <div className="App">



















    </div>
  );
}
export default App;
