import logo from './logo.svg';
import './App.css';


function convertTemperature (temperature, fromUnit, toUnit)  {
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



  function getApartmentLocation (floors, apartmentsPerFloor, apartmentNumber) {
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


  function newLine  (inputString)  {
    let linesArray = inputString.split("\\n");
    let resultString = linesArray.join("\n");
    return resultString;
  };
    let userInput = prompt("Введіть інформацію для нового рядку, використовуючи \\n");
  let stringWithLineBreaks = newLine(userInput);
  console.log(stringWithLineBreaks);


  const credentials1 = {
    login: 'admin',
    password: 'qwerty',
  };
  
  function checkCredentials1 (login, password)  {
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


  
  // createPerson

  function createPerson(name, surname) 
              {let person= {name: name,
              surname: surname,
              fatherName: undefined,
              getFullName: function() {
                  return `${this.name} ${this.fatherName || ""} ${this.surname}`;
              }}
              return person;
}

const newPerson1 = createPerson("Вася", "Пупкін");
const newPerson2 = createPerson("Ганна", "Іванова");

console.log(newPerson1.getFullName());
newPerson1.fatherName = 'Іванович';
console.log(newPerson1.getFullName());
console.log(newPerson2.getFullName());
  

// createPersonClosure
варіант1
 {function createPersonClosure(name, surname) {
    let age;
    let fatherName;

      function isName(value) {
        return typeof value === 'string' && /^[А-ЯІЇЄ][а-яіїє]*$/.test(value);
      }

      function isAge(value) {
        return typeof value === 'number' && value >= 0 && value <= 100;
      }

      function getName() {
        return name;
      }

      function getSurname() {
        return surname;
      }

      function getFatherName() {
        return fatherName;
      }

      function getAge() {
        return age;
      }

      function getFullName() {
        return `${name} ${fatherName || ""} ${surname}`;
      }

        function setName(newName) {
          if (isName(newName)) {
            name = newName;
          }
          return getName();
        }

        function setSurname(newSurname) {
          if (isName(newSurname)) {
            surname = newSurname;
          }
          return getSurname();
        }

        function setFatherName(newFatherName) {
          if (isName(newFatherName)) {
            fatherName = newFatherName;
          }
          return getFatherName();
        }

        function setAge(newAge) {
          if (isAge(newAge)) {
            age = newAge;
          }
          return getAge();
        }

        function setFullName(fullName) {
          const parts = fullName.split(" ");
          if (parts.length >= 2) {
            setSurname(parts[0]);
            setName(parts[1]);
            if (parts.length === 3) {
              setFatherName(parts[2]);
            }
          }
          return getFullName();
        }

  return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName,
    setName,
    setSurname,
    setFatherName,
    setAge,
    setFullName,
  };
}

const a = createPersonClosure("Вася", "Пупкін");
const b = createPersonClosure("Ганна", "Іванова");

console.log(a.getName());
a.setAge(15);
console.log(a.getAge()); // Should print 15
a.setAge(150); // Won't change age as it's out of range
console.log(a.getAge()); // Still should print 15

b.setFullName("Петрова Ганна Миколаївна");
console.log(b.getFatherName()); }// Should print 'Миколаївна'


// варіант2

{function createPersonClosure(name, surname) {
   name = validateName(name);
   surname = validateName(surname);
  let fatherName = "";
  let age = 0;

  function validateName(value) {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

  function validateAge(value) {
    const parsedAge = parseInt(value, 10);
    return !isNaN(parsedAge) && parsedAge >= 0 && parsedAge <= 100 ? parsedAge : age;
  }

  return {
    getName: function () {
      return name;
    },
    getSurname: function () {
      return surname;
    },
    getFatherName: function () {
      return fatherName;
    },
    getAge: function () {
      return age;
    },
    getFullName: function () {
      return `${surname} ${name} ${fatherName}`;
    },
    setName: function (newName) {
      name = validateName(newName);
      return name;
    },
    setSurname: function (newSurname) {
      surname = validateName(newSurname);
      return surname;
    },
    setFatherName: function (newFatherName) {
      fatherName = validateName(newFatherName);
      return fatherName;
    },
    setAge: function (newAge) {
      age = validateAge(newAge);
      return age;
    },
    setFullName: function (fullName) {
      const parts = fullName.split(" ");
      if (parts.length === 3) {
        surname = validateName(parts[0]);
        name = validateName(parts[1]);
        fatherName = validateName(parts[2]);
      }
      return `${surname} ${name} ${fatherName}`;
    },
  };
}

const a = createPersonClosure("Вася", "Пупкін");
const b = createPersonClosure("Ганна", "Іванова");

console.log(a.getName());
a.setAge(15);
console.log(a.getAge()); // 15
a.setAge(150);
console.log(a.getAge()); // 15 (не працює)

b.setFullName("Петрова Ганна Миколаївна");
console.log(b.getFatherName());} // Миколаївна  

//


// createPersonClosureDestruct

{function createPersonClosureDestruct({ name, surname, fatherName = '', age = 0 }) {
  return {
    getName() {
      return name;
    },
    getSurname() {
      return surname;
    },
    getFatherName() {
      return fatherName;
    },
    getAge() {
      return age;
    },
    getFullName() {
      return `${name} ${fatherName} ${surname} ${age}`;
    },
    setName(newName) {
      if (isValidName(newName)) {
        name = newName;
      }
      return name;
    },
    setSurname(newSurname) {
      if (isValidName(newSurname)) {
        surname = newSurname;
      }
      return surname;
    },
    setFatherName(newFatherName) {
      if (isValidName(newFatherName)) {
        fatherName = newFatherName;
      }
      return fatherName;
    },
    setAge(newAge) {
      if (isValidAge(newAge)) {
        age = newAge;
      }
      return age;
    },
    setFullName(fullName) {
      const [newSurname, newName, newFatherName] = fullName.split(" ");
      if (newSurname && newName && newFatherName) {
        setSurname(newSurname);
        setName(newName);
        setFatherName(newFatherName);
      }
      return getFullName();
    },
  };
}

// Використовуємо деструктуризацію для створення об'єкта параметрів
const a = createPersonClosureDestruct({ name: 'Вася', surname: 'Пупкін' });
const b = createPersonClosureDestruct({ name: 'Миколай', age: 75 });

console.log(a.getFullName());
console.log(b.getFullName());
console.log(a.getName());
console.log(b.getName());
console.log(a.getAge());
console.log(b.getAge());}


// isSorted


  {function isSorted(...params){
    for(let i=1; i< params.length; i++) {
      if (typeof params[i] !=='number' || params[i]< params[i-1]) {
        return false;
      }
    }
    
      return true;}
    
    console.log(isSorted(1, 2, 3, 4));      
    console.log(isSorted(-1, 0, 1, 2));     
    console.log(isSorted(5, 3, 7, 1));      
    console.log(isSorted('a', 'b', 'c'));}

    // ТестisSorted
    {function isSorted(...params){
      for(let i=1; i< params.length; i++) {
        if (typeof params[i] !=='number' || params[i]< params[i-1]) {
          return false;
        }
      }
      
        return true;}
      
  const userArr =[];
  const length =prompt('введіть кількість елементів у масиві:');
  for (let i=0; i<length; i++){
    const userInput = parseFloat(prompt('Введіть елемент :'));
    if (!isNaN(userInput)){
      userArr.push(userInput);
    } else{console.log('Введено некоректне значенняю Введіть будь ласка числою');
  i--;}
  }
  console.log(`Введений масив: [${userArr.join(', ')}]`);
  console.log(`Масив є впорядкованим: ${isSorted(...userArr)}`);}



  // personForm
  function personForm(parent, person) {
    const inputName = document.createElement('input');
    const labelName = document.createElement('label');
    labelName.innerText = "Ім'я: ";
    labelName.appendChild(inputName);
    inputName.value = person.getName();
    parent.appendChild(labelName);

    const inputSurname = document.createElement('input');
    const labelSurname = document.createElement('label');
    labelSurname.innerText = 'Прізвище: ';
    labelSurname.appendChild(inputSurname);
    inputSurname.value = person.getSurname();
    parent.appendChild(labelSurname);

    const inputFatherName = document.createElement('input');
    const labelFatherName = document.createElement('label');
    labelFatherName.innerText = 'По батькові: ';
    labelFatherName.appendChild(inputFatherName);
    inputFatherName.value = person.getFatherName();
    parent.appendChild(labelFatherName);

    const inputAge = document.createElement('input');
    const labelAge = document.createElement('label');
    labelAge.innerText = 'Вік: ';
    labelAge.appendChild(inputAge);
    inputAge.value = person.getAge();
    parent.appendChild(labelAge);

    const inputFullName = document.createElement('input');
    const labelFullName = document.createElement('label');
    labelFullName.innerText = 'ПІБ: ';
    labelFullName.appendChild(inputFullName);
    inputFullName.value = person.getFullName();
    parent.appendChild(labelFullName);

    inputName.oninput = () => {
        person.setName(inputName.value);
        inputName.value = person.getName();
        updateFullName();
    };

    inputSurname.oninput = () => {
        person.setSurname(inputSurname.value);
        inputSurname.value = person.getSurname();
        updateFullName();
    };

    inputFatherName.oninput = () => {
        person.setFatherName(inputFatherName.value);
        inputFatherName.value = person.getFatherName();
        updateFullName();
    };

    inputAge.oninput = () => {
        const age = parseInt(inputAge.value, 10);
        person.setAge(age);
        inputAge.value = person.getAge();
    };

    inputFullName.oninput = () => {
        person.setFullName(inputFullName.value);
        inputFullName.value = person.getFullName();
    };

   
    function updateFullName() {
        inputFullName.value = person.getFullName();
    }
}

document.body.appendChild(form);

const b = createPersonClosure("Ганна", "Іванова");
b.setAge(15);
b.setFullName("Петрова Ганна Миколаївна");

const formContainer = document.createElement('div');
formContainer.id = 'form-container';
document.body.appendChild(formContainer);

formContainer.appendChild(form);
personForm(formContainer, b);

// getSetForm
function createInput(type, value, placeholder, onInput) {
  const input = document.createElement('input');
  input.type = type;
  input.value = value;
  input.placeholder = placeholder;
  input.oninput = onInput;
  return input;
}

function generateForm(parent, getSet) {
  const inputs = {};

  function updateInputs() {
      for (const key in inputs) {
          const input = inputs[key];
          const getMethod = 'get' + key.charAt(0).toUpperCase() + key.slice(1);
          if (getMethod in getSet) {
              input.value = getSet[getMethod]();
          }
      }
  }

  for (const getSetName in getSet) {
      const isGet = getSetName.startsWith('get');
      const fieldName = getSetName.charAt(3).toLowerCase() + getSetName.slice(4);

      if (isGet) {
          const setKey = 'set' + fieldName;

          const input = createInput('text', getSet[getSetName](), fieldName, () => {
              const setMethod = getSet[setKey];
              if (setMethod) {
                  setMethod(input.value);
                  updateInputs();
              }
          });

          inputs[fieldName] = input;
          parent.appendChild(input);
      }
  }

  updateInputs();
}

const car = {
  getBrand() {
      return 'BMW';
  },
  setBrand(newBrand) {
      
      return newBrand;
  },
  getModel() {
      return 'X5';
  },
  setModel(newModel) {
     
      return newModel;
  },
  getVolume() {
      return 2.4;
  },
  setVolume(newVolume) {
      
      return newVolume;
  },
  getTax() {
      return this.getVolume() * 100;
  }
};

generateForm(document.body, car);




function App() {
  return (    
    <div className="App">
          
         
         
         

         
         
        
    
          
         
      






  
</div>
  );
}
export default App;
