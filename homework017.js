import logo from './logo.svg';
import './App.css';
import { click } from '@testing-library/user-event/dist/click';

// Світлофор

const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms));

async function trafficLight(greenTime, yellowTime, redTime, pedestrianLight) {
    while (true) {
        if (!pedestrianLight) {
            document.body.style.backgroundColor = 'green';
            await delay(greenTime);
        }

        document.body.style.backgroundColor = 'yellow';
        await delay(yellowTime);

        if (!pedestrianLight) {
            document.body.style.backgroundColor = 'red';
            await delay(redTime);
        }
        await delay(12000); // Затримка, щоб кольори були видимими протягом певного часу
    }
}

const greenLight = document.createElement('div');
const redLight = document.createElement('div');
const button = document.createElement('button');

button.textContent = 'Натиснути';

greenLight.style.width = redLight.style.width = '100px';
greenLight.style.height = redLight.style.height = '100px';
greenLight.style.backgroundColor = 'green';
redLight.style.backgroundColor = 'red';
greenLight.style.border = redLight.style.border = '2px solid black';
greenLight.style.borderRadius = redLight.style.borderRadius = '50%';
button.style.marginTop = '20px';

document.body.appendChild(greenLight);
document.body.appendChild(redLight);
document.body.appendChild(button);

async function pedestrianTrafficLight(greenTime, redTime) {
    while (true) {
        greenLight.style.backgroundColor = 'green';
        redLight.style.backgroundColor = 'transparent';
        await delay(greenTime);

        redLight.style.backgroundColor = 'red';
        greenLight.style.backgroundColor = 'transparent';
        await delay(redTime);
    }
}

async function pedestrianLightWithButton(greenTime, redTime, delayTime) {
    let pedestrianButtonPressed = false;
    while (true) {
        if (pedestrianButtonPressed) {
            await delay(delayTime); // Затримка перед початком роботи пішохідного світлофора
            await pedestrianTrafficLight(greenTime, redTime);
            pedestrianButtonPressed = false;
        } else {
            await trafficLight(greenTime, redTime, false);
        }
    }
}

function simulatePedestrianButtonPress() {
    console.log("Pedestrian button pressed");
    pedestrianButtonPressed = true;
}

async function main() {
    const greenTime = 5000;
    const yellowTime = 2000;
    const redTime = 5000;
    pedestrianLightWithButton(greenTime, redTime, yellowTime);
}

button.onclick = simulatePedestrianButtonPress;

main();

// speedtest
async function speedtest(getPromise, count, parallel = 1) {
    let start = Date.now();
    let totalQueryDuration = 0;

    for (let i = 0; i < count; i++) {
        const startParallel = Date.now();
        const promises = [];
        
        for (let j = 0; j < parallel; j++) {
            promises.push(getPromise());
        }

        await Promise.all(promises);

        const endParallel = Date.now();
        totalQueryDuration += endParallel - startParallel;
    }

    const end = Date.now();
    const duration = end - start;
    const parallelDuration = totalQueryDuration / count;
    const parallelSpeed = (count * parallel) / totalQueryDuration;
    const queryDuration = totalQueryDuration / (count * parallel);
    const querySpeed = 1 / queryDuration;

    return {
        duration,
        querySpeed,
        queryDuration,
        parallelSpeed,
        parallelDuration
    };
}

// Приклад використання з функцією затримки
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

speedtest(() => delay(1000), 10, 10)
    .then(result => console.log(result))
    .catch(error => console.error(error));

// Приклад використання з fetch
speedtest(() => fetch('https://swapi.dev/api/people/1').then(res => res.json()), 10, 5)
    .then(result => console.log(result))
    .catch(error => console.error(error));
// gql

function gql(url, query, variables = {}) {
    return fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'

            },
            body: JSON.stringify({ query, variables }),
        })
        .then((res) => res.json())
        .then((r) => {
            if (r.data) {
                return r.data
            }
            throw new Error(r.errors[0].message)
        })
        .catch((error) => console.log(error));
}
; (async () => {
    const catQuery = `query cats($q: String){
                                            CategoryFind(query: $q){
                                                _id name
                                            }
                                        }`
    const cats = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql", catQuery, { q: "[{}]" })
    console.log(cats) //список категорій з _id name та всім таким іншим


    const loginQuery = `query login($login:String, $password:String){
                                    login(login:$login, password:$password)
                            }`

    const token = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql", loginQuery, { login: "test457", password: "123123" })
    console.log(token)
})()

// jwtDecode

const jwtDecode = token => {

    try {
        return JSON.parse(atob(token.split('.')[1]))
    } catch {

    }
}
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw"
console.log(jwtDecode(token))
//{
//  "sub": {
//    "id": "632205aeb74e1f5f2ec1a320",
//    "login": "test457",
//    "acl": [
//      "632205aeb74e1f5f2ec1a320",
//      "user"
//    ]
//  },
//  "iat": 1668272163
//}

try {
    console.log(jwtDecode())         //undefined
    console.log(jwtDecode("дічь"))   //undefined
    console.log(jwtDecode("ey.ey.ey"))   //undefined

    console.log('до сюди допрацювало, а значить jwtDecode не матюкався в консоль червоним кольором')
}
finally {
    console.log('ДЗ, мабуть, закінчено')
}












function App() {
    return (
        <div className="App">



















        </div>
    );
}
export default App;
