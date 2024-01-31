import logo from './logo.svg';
import './App.css';
import { isVisible } from '@testing-library/user-event/dist/utils';

// Конструктор особи

function Person(name, surname) {
    this.name = name,
        this.surname = surname,
        this.fatherName = undefined,
        this.getFullName = function () {

            return `${this.name} ${this.fatherName || ""} ${this.surname}`;
        };
}


const a = new Person("Вася", "Пупкін")
const b = new Person("Ганна", "Іванова")
const c = new Person("Єлизавета", "Петрова")

console.log(a.getFullName())
a.fatherName = 'Іванович'
console.log(a.getFullName())
console.log(b.getFullName())
console.log(c.getFullName())



// Прототип особи

{
    function Person(name, surname) {
        this.name = name,
            this.surname = surname,
            this.fatherName = undefined
    };

    Person.prototype.getFullName = function () {
        return `${this.name} ${this.fatherName || ""} ${this.surname}`;
    }


    const a = new Person("Вася", "Пупкін")
    const b = new Person("Ганна", "Іванова")
    const c = new Person("Єлизавета", "Петрова")

    console.log(a.getFullName()) // Василь Пупкін
    a.fatherName = 'Іванович' // Василь Іванович Пупкін
    console.log(a.getFullName())
    console.log(b.getFullName())
    console.log(c.getFullName())
}// Ганна Іванова



// Store
function Store(reducer) {
    let state = reducer(undefined, {});
    let sbs = [];

    this.getState = () => state;

    this.subscribe = cb => (sbs.push(cb), () => (sbs = sbs.filter(c => c !== cb)));

    this.dispatch = action => {
        const newState = reducer(state, action);
        if (newState !== state) {
            state = newState;
            for (let cb of sbs) cb();
        }
    };
}

const store = new Store(reducer);

const select = document.createElement('select');

select.innerHTML = '<option value="goods" disabled selected>Оберіть товар</option>';

for (let goods in store.getState()) {
    if (store.getState().hasOwnProperty(goods) && typeof store.getState()[goods] === 'object') {
        const option = document.createElement('option');
        option.value = goods;
        option.innerText = goods;
        select.appendChild(option);
    }
}
document.body.appendChild(select);

const quantityInput = document.createElement('input');
quantityInput.type = 'number';
quantityInput.placeholder = 'Введіть кількість';
document.body.appendChild(quantityInput);

const fundsInput = document.createElement('input');
fundsInput.type = 'number';
fundsInput.placeholder = 'Введіть суму грошей';
document.body.appendChild(fundsInput);

const buyButton = document.createElement('button');
buyButton.innerText = 'Купити';
buyButton.addEventListener('click', () => {
    const selectedGoods = select.value;
    const quantity = parseInt(quantityInput.value, 10);
    const funds = parseFloat(fundsInput.value);

    if (!isNaN(quantity) && quantity > 0 && !isNaN(funds) && funds >= 0) {
        const action = {
            type: 'Купити',
            goods: selectedGoods,
            number: quantity,
            funds: funds,
        };
        store.dispatch(action);
    } else {
        alert('Неправильні дані. Будь ласка, введіть дійсну кількість і суму грошей.');
    }
});
document.body.appendChild(buyButton);

const displayContainer = document.createElement('div');
document.body.appendChild(displayContainer);

function updateDisplay() {
    displayContainer.innerHTML = '';

    for (let goods in store.getState()) {
        if (store.getState().hasOwnProperty(goods) && typeof store.getState()[goods] === 'object') {
            const quantity = store.getState()[goods].quantity;
            const price = store.getState()[goods].price;
            const itemInfo = document.createElement('p');
            itemInfo.innerText = `${goods}: ${quantity} шт. по ${price} грн`;
            displayContainer.appendChild(itemInfo);
        }
    }

    const cashInfo = document.createElement('p');
    cashInfo.innerText = `Гроші в касі: ${store.getState().каса} грн`;
    displayContainer.appendChild(cashInfo);

    document.title = `Каса: ${store.getState().каса} грн`;
}

store.subscribe(updateDisplay);
updateDisplay();

function reducer(state, action = { type: '', goods: '', number: 0, funds: 0 }) {
    if (!state) {
        return {
            пиво: { quantity: 100, price: 52 },
            чіпси: { quantity: 100, price: 53 },
            цигарки: { quantity: 100, price: 105 },
            кола: { quantity: 100, price: 37 },
            мінералка: { quantity: 100, price: 25 },
            каса: 100,
        };
    }

    if (action.type === 'Купити' && state[action.goods].quantity >= action.number && action.funds >= action.number * state[action.goods].price) {
        const totalPrice = action.number * state[action.goods].price;
        return {
            ...state,
            [action.goods]: {
                ...state[action.goods],
                quantity: state[action.goods].quantity - action.number,
            },
            каса: state.каса + totalPrice,
        };
    } else {
        return state;
    }
}


updateDisplay();


store.subscribe(updateDisplay);



// Password

function Password(parent, open) {
    // Create password input element
    this.inputElement = document.createElement('input');
    this.inputElement.type = 'password';
    this.inputElement.placeholder = 'введіть пароль';
    // Create toggle checkbox
    this.toggleCheckbox = document.createElement('input');
    this.toggleCheckbox.type = 'checkbox';
    this.toggleCheckbox.addEventListener('change', () => this.toggleVisibility());

    // Set initial visibility state
    this.setOpen(open);

    // Append elements to the parent
    parent.appendChild(this.inputElement);
    parent.appendChild(this.toggleCheckbox);

    // Callbacks
    this.onChange = null;
    this.onOpenChange = null;
}

Password.prototype.setValue = function (value) {
    this.inputElement.value = value;
    this.onChangeCallback();
};

Password.prototype.getValue = function () {
    return this.inputElement.value;
};

Password.prototype.setOpen = function (open) {
    this.inputElement.type = open ? 'text' : 'password';
    this.toggleCheckbox.checked = open;
    this.onOpenChangeCallback();
};

Password.prototype.getOpen = function () {
    return this.toggleCheckbox.checked;
};

Password.prototype.toggleVisibility = function () {
    this.setOpen(this.toggleCheckbox.checked);
};

Password.prototype.onChangeCallback = function () {
    if (typeof this.onChange === 'function') {
        this.onChange(this.getValue());
    }
};

Password.prototype.onOpenChangeCallback = function () {
    if (typeof this.onOpenChange === 'function') {
        this.onOpenChange(this.getOpen());
    }
};
Password.prototype.setStyle = function (styleObject) {
    Object.assign(this.inputElement.style, styleObject);
};

// Example usage:
let p = new Password(document.body, true);

p.onChange = data => console.log(data);
p.onOpenChange = open => console.log(open);

p.setValue('qwerty');
console.log(p.getValue());

p.setOpen(false);
console.log(p.getOpen());

// LoginForm

const formLogin = document.createElement('form');

const inputElement = document.createElement('input');
inputElement.type = 'text';
inputElement.placeholder = 'введіть логін'

const password = new Password(formLogin, true);

formLogin.appendChild(inputElement);


const button = document.createElement('button');
button.innerText = 'Ввести';
button.setAttribute('disabled', true);
formLogin.appendChild(button);

document.body.appendChild(formLogin);

inputElement.addEventListener('input', checkFormValidity);
password.onChange = checkFormValidity;

function checkFormValidity() {
    const isFormValid = inputElement.value.trim() !== '' && password.getValue().trim() !== '';
    button.disabled = !isFormValid;
}

formLogin.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Форма відправлена!\nUsername: ' + inputElement.value + '\nPassword:' + password.getValue());
}
);


// LoginForm Constructor
function LoginForm() {
    this.formLogin = document.createElement('form');
    this.inputElement = document.createElement('input');
    this.inputElement.type = 'text';
    this.inputElement.placeholder = 'введіть логін';

    this.password = new Password(this.formLogin, true);

    this.formLogin.appendChild(this.inputElement);


    this.button = document.createElement('button');
    this.button.innerText = 'Ввести';
    this.button.setAttribute('disabled', true);
    this.formLogin.appendChild(this.button);

    document.body.appendChild(this.formLogin);

    this.getUserName = function () {
        return this.inputElement.value;
    };

    this.setUserName = function (value) {
        this.inputElement.value = value;
        this.checkFormValidity();
    };

    this.getUserPassword = function () {
        return this.password.getValue();
    };

    this.setUserPassword = function (value) {
        this.password.setValue(value);
        this.checkFormValidity();
    };

    this.inputElement.addEventListener('input', () => this.checkFormValidity());
    this.password.onChange = () => this.checkFormValidity();

    this.formLogin.addEventListener('submit', (event) => this.onSubmit(event));
}

LoginForm.prototype.checkFormValidity = function () {
    const isFormValid = this.inputElement.value.trim() !== '' && this.password.getValue().trim() !== '';
    this.button.disabled = !isFormValid;
};

LoginForm.prototype.onSubmit = function (event) {
    event.preventDefault();
    alert('Форма відправлена!\nUsername: ' + this.getUserName() + '\nPassword: ' + this.getUserPassword());
};

const loginFormInstance = new LoginForm();


// Password Verify

const container = document.body;
const password1 = new Password(container, true);
const password2 = new Password(container, true);

password2.setOpen(false);

password1.inputElement.addEventListener('input', handlePasswordInput);
password1.inputElement.addEventListener('focus', handlePasswordFocus);
password1.toggleCheckbox.addEventListener('change', handleCheckboxChange);

password2.inputElement.addEventListener('input', handlePasswordInput);
password2.inputElement.addEventListener('focus', handlePasswordFocus);

function handlePasswordInput() {
    password2.setOpen(password1.getValue() !== '');
    checkPasswordsMatch();
}

function handlePasswordFocus() {
    password2.setOpen(false);
}

function handleCheckboxChange() {

    password2.inputElement.style.display = password1.getOpen() ? 'none' : 'block';
}

function checkPasswordsMatch() {
    const match = password1.getValue() === password2.getValue();
    const borderColor = match ? '1px solid green' : '2px solid red';

    [password1, password2].forEach(password => {
        password.inputElement.style.border = borderColor;
    });


    const isHidden = password1.inputElement.type === 'password';
    password2.inputElement.style.display = isHidden ? 'block' : 'none';
}























function App() {
    return (
        <div className="App">



















        </div>
    );
}
export default App;
