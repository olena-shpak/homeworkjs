import logo from './logo.svg';
import './App.css';

// ДЗ: Проміси
// fetch basic
function displayJSONTable(domElement, jsonData) {
    if (!domElement || !jsonData || !Array.isArray(jsonData) || jsonData.length === 0
        || typeof jsonData[0] !== 'object') {
        console.error('Недійсні параметри. Надайте дійсний елемент DOM і дані JSON.');
        return;
    }

    domElement.innerHTML = '';
    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');
    const keys = Object.keys(jsonData[0]);

    keys.forEach(key => {

        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });


    thead.appendChild(headerRow);
    table.appendChild(thead);

    jsonData.forEach(obj => {
        const row = document.createElement('tr');

        keys.forEach(key => {
            const td = document.createElement('td');

            if (Array.isArray(obj[key])) {
                td.textContent = obj[key].join(', ');
            } else {
                td.textContent = obj[key];
            }

            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    domElement.appendChild(table);
}

const outputElement = document.createElement('div');
outputElement.id = 'output';
document.body.appendChild(outputElement);

fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(data => {

        displayJSONTable(outputElement, [data]);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });



// fetch improved
function displayJSONTable(domElement, jsonData) {
    if (!domElement || !jsonData || !Array.isArray(jsonData) || jsonData.length === 0
        || typeof jsonData[0] !== 'object') {
        console.error('Недійсні параметри. Надайте дійсний елемент DOM і дані JSON.');
        return;
    }

    domElement.innerHTML = '';
    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');
    const keys = Object.keys(jsonData[0]);

    keys.forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        th.style.border = '1px';
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    function fetchAndDisplayData(td, url) {
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                td.innerHTML = '';
                displayJSONTable(td, [data]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    jsonData.forEach(obj => {
        const row = document.createElement('tr');

        keys.forEach(key => {
            const td = document.createElement('td');
            const value = obj[key];

            if (Array.isArray(value)) {
                if (value.some(item => typeof item === 'string' && item.includes('https://swapi.dev/api/'))) {
                    const button = document.createElement('button');
                    button.textContent = 'Далі буде';
                    button.style.border = '1px';
                    button.style.backgroundColor = 'green';
                    button.addEventListener('click', () => {
                        fetchAndDisplayData(td, value[0]);
                    });
                    td.appendChild(button);
                } else {
                    td.textContent = value.join(', ');
                    td.style.border = '1px';
                }
            } else if (typeof value === 'string' && value.includes('https://swapi.dev/api/')) {
                const button = document.createElement('button');
                button.textContent = 'Далі буде';
                button.style.border = '1px';
                button.style.backgroundColor = 'blue';
                button.addEventListener('click', () => {
                    fetchAndDisplayData(td, value);

                });
                td.appendChild(button);
            } else {
                td.textContent = value;
                td.style.border = '1px';
            }

            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    domElement.appendChild(table);
}

const outputElement = document.createElement('div');
outputElement.id = 'output';
document.body.appendChild(outputElement);

fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(data => {
        displayJSONTable(outputElement, [data]);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


// race
const delay = () => {
    const randomDelay = Math.floor(Math.random() * 3000) + 1000; // Random delay between 1 and 4 seconds
    return new Promise(ok => setTimeout(() => ok(randomDelay), randomDelay));
};

const fetchPromise = fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return 'Fetch resolved';
    });

Promise.race([delay(), fetchPromise])
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });



// Promisify: confirm

function confirmPromise(text) {
    return new Promise((resolve, reject) => {
        const result = confirm(text) ? resolve() : reject();
    }
    );

}

confirmPromise('Проміси це складно?')
    .then(() => console.log('не так вже й складно'),
        () => console.log('respect за посидючість і уважність'))

// Promisify: prompt

function promptPromise(text) {
    return new Promise((resolve, reject) => {
        const result = prompt(text);
        if (result !== null) { resolve(result) }
        else { reject() }
    }

    )
}
promptPromise("Як тебе звуть?")
    .then(name => console.log(`Тебе звуть ${name}`))
    .catch(() => console.log('Ну навіщо морозитися, нормально ж спілкувалися'))


// Promisify: LoginForm
class LoginForm {
    constructor(parent) {
        this.parent = parent;
        this.login = '';
        this.password = '';

        this.renderForm();
    }

    renderForm() {
        const formElement = document.createElement('form');
        const loginInput = document.createElement('input');
        const passwordInput = document.createElement('input');
        const loginButton = document.createElement('button');

        loginInput.type = 'text';
        loginInput.placeholder = 'Enter login';
        loginInput.addEventListener('input', (event) => this.login = event.target.value);

        passwordInput.type = 'password';
        passwordInput.placeholder = 'Enter password';
        passwordInput.addEventListener('input', (event) => this.password = event.target.value);

        loginButton.type = 'button';
        loginButton.textContent = 'Enter';
        loginButton.addEventListener('click', () => this.handleLogin());

        formElement.appendChild(loginInput);
        formElement.appendChild(passwordInput);
        formElement.appendChild(loginButton);

        this.parent.appendChild(formElement);
    }

    handleLogin() {
        const { login, password } = this;
        if (login && password) {
            // Resolve the promise with the login and password
            this.resolvePromise({ login, password });
        } else {
            // Reject the promise if login or password is empty
            this.rejectPromise();
        }
    }

    setPromiseCallback(resolve, reject) {
        this.resolvePromise = resolve;
        this.rejectPromise = reject;
    }
}

function loginPromise(parent) {
    return new Promise((resolve, reject) => {
        const form = new LoginForm(parent);
        form.setPromiseCallback(resolve, reject);
    });
}

loginPromise(document.body)
    .then(({ login, password }) => console.log(`Ви ввели ${login} та ${password}`))
    .catch(() => console.log('Ви відмовились від входу або не ввели логін/пароль.'));



function App() {
    return (
        <div className="App">



















        </div>
    );
}
export default App;
