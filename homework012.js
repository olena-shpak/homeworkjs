import logo from './logo.svg';
import './App.css';

function createStore(reducer) {
    let state = reducer(undefined, {});
    let sbs = [];

    const getState = () => state;

    const subscribe = cb => (sbs.push(cb), () => (sbs = sbs.filter(c => c !== cb)));

    const dispatch = action => {
        const newState = reducer(state, action);
        if (newState !== state) {
            state = newState;
            for (let cb of sbs) cb();
        }
    }

    return {
        getState,
        dispatch,
        subscribe
    };
}

const store = createStore(reducer);

const select = document.createElement('select');

select.innerHTML = '<option value="goods" disabled selected>Оберіть товар</option>';
select.innerText = '[action.goods]';


for (let goods in store.getState()) {
    if (store.getState().hasOwnProperty(goods) && typeof store.getState()[goods] === 'object') {
        const option = document.createElement('option');
        option.value = goods;
        option.innerText = goods;
        select.appendChild(option);
    }
} document.body.appendChild(select);

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











function App() {
    return (
        <div className="App">



















        </div>
    );
}
export default App;
