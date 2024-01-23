import logo from './logo.svg';
import './App.css';


// makeProfileTimer

{
  const makeProfileTimer = () => {
    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      return endTime - startTime;
    };
  };

  const timer = makeProfileTimer();
  alert('Вимiрюємо час роботи цього alert');
  // якийсь код, час виконання якого ми хочемо виміряти з високою точністю
  alert(`Час виконання коду: ${timer()} мс`);

  const timer2 = makeProfileTimer();
  prompt('');
  alert(`Час роботи двох alert та одного prompt: ${timer()} мс`);
  alert(`Час роботи prompt та попереднього alert: ${timer2()} мс`);
}

// makeSaver
{const makeSaver = (value) => {
  let result;
  let input = false;

  return () => {
    if (!input) {
      result = value();
      input = true;
    }
    return result;
  };
};

// Приклад використання:

let saver = makeSaver(Math.random);
let value1 = saver();
let value2 = saver();
console.log(`Random: ${value1} === ${value2}`);

let saver2 = makeSaver(() => {
  console.log('saved function called');
  return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random() * 6)];
});

let value3 = saver2();
let value4 = saver2();
console.log(`Value3 === Value4: ${value3 === value4}`);

let namePrompt = prompt.bind(window, 'Як тебе звуть?');
let nameSaver = makeSaver(namePrompt);

alert(`Привіт! Prompt ще не було!`);
alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`);
alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`);
}
//було:
//  const makeSaver = (value) => {
//   let result;

//   return () => (result === undefined ? (result = value()) : result);
// };

// let saver = makeSaver(Math.random);
// let value1 = saver();
// let value2 = saver();
// console.log(`Random: ${value1} === ${value2}`);

// let saver2 = makeSaver(() => {
//   console.log('saved function called');
//   return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random() * 6)];
// });

// let value3 = saver2();
// let value4 = saver2();
// console.log(`Value3 === Value4: ${value3 === value4}`);

// let namePrompt = prompt.bind(window, 'Як тебе звуть?');
// let nameSaver = makeSaver(namePrompt);

// alert(`Привіт! Prompt ще не було!`);
// alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`);
// alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`);


// myBind

const myBind = (func, context, defaults) => {
  return function (...args) {
    const boundArgs = defaults.map((defaultValue, index) => (args[index] !== undefined ? args[index] : defaultValue));
    return func.apply(context, boundArgs.concat(args.slice(defaults.length)));
  };
};


let pow5 = myBind(Math.pow, Math, [undefined, 5]);
console.log(pow5(2)); // => 32
console.log(pow5(4)); // => 1024


let cube = myBind(Math.pow, Math, [undefined, 3]);
console.log(cube(3)); // => 27


let chessMin = myBind(Math.min, Math, [undefined, 4, undefined, 5, undefined, 8, undefined, 9]);
console.log(chessMin(-1, -5, 3, 15)); // => -5


let zeroPrompt = myBind(prompt, window, [undefined, "0"]);
let someNumber = zeroPrompt("Enter a number");
console.log(someNumber);


const bindedJoiner = myBind((...params) => params.join(''), null, [undefined, 'b', undefined, undefined, 'e', 'f']);
console.log(bindedJoiner('a', 'c', 'd')); // => 'abcdef'
console.log(bindedJoiner('1', '2', '3')); // => '1b23ef'

// checkResult

function checkResult(original, validator) {
  function wrapper(...params) {
    let result;

    do {
      result = original.call(this, ...params);
    } while (!validator(result));

    return result;
  }

  return wrapper;
}

//numberPrompt - це функція, яка буде запускати prompt до тих пір, поки користувач не введе число
const numberPrompt = checkResult(prompt, x => !isNaN(+x));
let number = +numberPrompt("Введіть число", "0"); //параметри передаються наскрізь до оригіналу. Не забудьте передати це, використовуючи call або apply

//gamePrompt - це функція, яка буде запускати prompt доти, доки користувач не введе одне зі слів 'камінь', 'ножиці', 'папір'
const gamePrompt = checkResult(prompt, x => ['камінь', 'ножиці', 'папір'].includes(x.toLowerCase()))
const turn = gamePrompt("Введіть щось зі списку: 'камінь', 'ножиці', 'папір'");


const RandomHigh = checkResult(Math.random, x => x >= 0.5 && x <= 1);

console.log(RandomHigh());

const AlwaysSayYes = checkResult(() => {
  let result2;
  do {
    result2 = confirm('погода гарна?');
  } while (result2 !== true);
  return result2;

})();
console.log(AlwaysSayYes())
const respectMe = checkResult(() => {
  let person;

  do {
    person = {
      name1: prompt("Введіть ваше ім'я"),
      surname: prompt("Введіть ваше прізвище"),
      fatherName: prompt("Введіть ваше по батькові")
    };
  } while (person.name1.trim() === '' || person.surname.trim() === '' || person.fatherName.trim() === '');

  return { ...person, fullName: `${person.name1} ${person.surname} ${person.fatherName}` };
})();

console.log(respectMe());






function App() {
  return (
    <div className="App">



















    </div>
  );
}
export default App;
