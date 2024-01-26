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
select.innerHTML = '<option value="goods" disabled selected>Choose a good</option>';

document.body.appendChild(select);

const quantityInput = document.createElement('input');
quantityInput.type = 'number';
quantityInput.placeholder = 'Enter quantity';
document.body.appendChild(quantityInput);

const fundsInput = document.createElement('input');
fundsInput.type = 'number';
fundsInput.placeholder = 'Enter amount of money';
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
        alert('Invalid input. Please enter a valid quantity and amount of money.');
    }
});
document.body.appendChild(buyButton);

function updateDisplay() {
   
    console.clear();

   
    select.innerHTML = '<option value="goods" disabled selected>Choose a good</option>';
    for (let goods in store.getState()) {
        if (store.getState().hasOwnProperty(goods) && typeof store.getState()[goods] === 'object') {
            const option = document.createElement('option');
            option.value = goods;
            option.innerText = goods;
            select.appendChild(option);
        }
    }

    for (let goods in store.getState()) {
        if (store.getState().hasOwnProperty(goods) && typeof store.getState()[goods] === 'object') {
            const quantity = store.getState()[goods].quantity;
            const price = store.getState()[goods].price;
            console.log(`${goods}: ${quantity} шт. по ${price} грн`);
        }
    }
    console.log(`Гроші в касі: ${store.getState().каса} грн\n`);

    
    document.title = `Каса: ${store.getState().каса} грн`;
}

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

    if (action.type === 'Купити' && state[action.goods].quantity >= action.number) {
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
