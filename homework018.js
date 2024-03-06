import logo from './logo.svg';
import './App.css';
import { click } from '@testing-library/user-event/dist/click';

// Store Class


class Store {
    #reducer;
    #state;
    #cbs = [];

    constructor(reducer) {
        this.#reducer = reducer;
        this.#state = this.#reducer(undefined, {});
    }

    getState() {
        return this.#state;
    }

    get state() {
        return this.getState();
    }

    subscribe(cb) {
        this.#cbs.push(cb);
        return () => {
            this.#cbs = this.#cbs.filter(c => c !== cb);
        };
    }

    dispatch(action) {
        const newState = this.#reducer(this.#state, action);
        if (newState !== this.#state) {
            this.#state = newState;
            for (let cb of this.#cbs) {
                cb();
            }
        }
    }
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


// Password Class
class Password {
    #inputElement;
    #toggleCheckbox;

    constructor(parent, open) {

        this.#inputElement = document.createElement('input');
        this.#inputElement.type = 'password';
        this.#inputElement.placeholder = 'введіть пароль';

        this.#toggleCheckbox = document.createElement('input');
        this.#toggleCheckbox.type = 'checkbox';
        this.#toggleCheckbox.addEventListener('change', () => this.toggleVisibility());

        this.setOpen(open);


        parent.appendChild(this.#inputElement);
        parent.appendChild(this.#toggleCheckbox);


        this.onChange = null;
        this.onOpenChange = null;
    }

    setValue(value) {
        this.#inputElement.value = value;
        this.onChangeCallback();
    }

    getValue() {
        return this.#inputElement.value;
    }

    setOpen(open) {
        this.#inputElement.type = open ? 'text' : 'password';
        this.#toggleCheckbox.checked = open;
        this.onOpenChangeCallback();
    }

    getOpen() {
        return this.#toggleCheckbox.checked;
    }

    toggleVisibility() {
        this.setOpen(this.#toggleCheckbox.checked);
    }

    onChangeCallback() {
        if (typeof this.onChange === 'function') {
            this.onChange(this.getValue());
        }
    }

    onOpenChangeCallback() {
        if (typeof this.onOpenChange === 'function') {
            this.onOpenChange(this.getOpen());
        }
    }

    setStyle(styleObject) {
        Object.assign(this.#inputElement.style, styleObject);
    }
}


let p = new Password(document.body, true);

p.onChange = data => console.log(data);
p.onOpenChange = open => console.log(open);

p.setValue('qwerty');
console.log(p.getValue());

p.setOpen(false);
console.log(p.getOpen());

// StoreThunk Class

class StoreThunk extends Store {
    constructor(reducer) {
        super(reducer);
    }

    dispatch(action) {
        if (typeof action === 'function') {
            action(this.dispatch.bind(this), this.getState.bind(this));
        } else {
            super.dispatch(action);
        }
    }
}


// RGB Class
class RGB {
    #r
    #g
    #b

    get r() {
        return this.#r
    }
    set r(color) {
        if (typeof color === 'number' && color <= 255 && color >= 0) {
            this.#r = color
        } else {
            throw new RangeError('RangeError')
        }
    }
    get g() {
        return this.#g
    }
    set g(color) {
        if (typeof color === 'number' && color <= 255 && color >= 0) {
            this.#g = color
        } else {
            throw new RangeError('RangeError')
        }
    }
    get b() {
        return this.#b
    }
    set b(color) {
        if (typeof color === 'number' && color <= 255 && color >= 0) {
            this.#b = color
        } else {
            throw new RangeError('RangeError')
        }
    }
    get rgb() {
        return `rgb(${this.#r}, ${this.#g}, ${this.#b})`
    }
    set rgb(color) {
        const rgbArr = color.match(/^(rgb)?\(?([01]?\d\d?|2[0-4]\d|25[0-5])(\W+)([01]?\d\d?|2[0-4]\d|25[0-5])(\W+)([01]?\d\d?|2[0-4]\d|25[0-5])\)?$/)
        if (rgbArr !== null) {
            const r = parseInt(rgbArr[2])
            const g = parseInt(rgbArr[4])
            const b = parseInt(rgbArr[6])
            if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
                this.#r = r
                this.#g = g
                this.#b = b
            } else {
                throw new SyntaxError('SyntaxError')
            }
        } else {
            throw new SyntaxError('SyntaxError')
        }
    }
    get hex() {
        return `#${this.#r.toString(16).padStart(2, "0")}${this.#g.toString(16).padStart(2, "0")}${this.#b.toString(16).padStart(2, "0")}`
    }
    set hex(color) {
        const hexArr = color.match(/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/)
        if (hexArr !== null) {
            const r = parseInt(hexArr[1], 16)
            const g = parseInt(hexArr[2], 16)
            const b = parseInt(hexArr[3], 16)
            if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
                this.#r = r
                this.#g = g
                this.#b = b
            } else {
                throw new SyntaxError('SyntaxError')
            }
        } else {
            throw new SyntaxError('SyntaxError')
        }
    }
}

const rgb = new RGB()
rgb.r = 15
rgb.g = 128
rgb.b = 192
console.log(rgb.hex) //#0F80C0
console.log(rgb.rgb) //rgb(15,128,192)
rgb.hex = '#2030FF'
console.log(rgb.rgb) //rgb(32, 48, 255)
rgb.rgb = 'rgb(100, 90, 50)'
console.log(rgb.r, rgb.g, rgb.b) //100, 90, 50

try {
    rgb.hex = 'діч' //SyntaxError
} catch (error) {
    console.error(error.message)
}

try {
    rgb.r = 1000 //RangeError
} catch (error) {
    console.error(error.message)
}



// RGBA Class
class RGBA extends RGB {
    #a

    get a() {
        return this.#a;
    }

    set a(transmittance) {
        if (typeof transmittance === 'number' && transmittance >= 0 && transmittance <= 1) {
            this.#a = transmittance;
        } else {
            throw new RangeError('transmittance value must be a number in the range from 0 to 1');
        }
    }

    get hex() {
        return super.hex + Math.round(this.#a * 255).toString(16).padStart(2, "0").toUpperCase();
    }

    set hex(color) {
        if (color.length === 9) {
            super.hex = `#${color.slice(1, 7)}`;
            this.#a = parseInt(color.slice(7, 9), 16) / 255;
        } else {
            super.hex = color;
            this.#a = 1;
        }
    }

    get rgba() {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.#a})`;
    }

    set rgba(color) {
        const rgbaArr = color.match(/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*([\d.]+)\)$/);
        if (rgbaArr !== null) {
            super.rgb = `rgb(${rgbaArr[1]}, ${rgbaArr[2]}, ${rgbaArr[3]})`;
            this.#a = parseFloat(rgbaArr[4]);
        } else {
            throw new SyntaxError('Invalid rgba color format');
        }
    }

    set color(color) {
        if (color.startsWith('#')) {
            this.hex = color;
        } else if (color.startsWith('rgba')) {
            this.rgba = color;
        } else if (color.startsWith('rgb')) {
            super.rgb = color;
            this.#a = 1;
        } else {
            throw new SyntaxError('Invalid color format');
        }
    }
}

const rgba = new RGBA();
rgba.hex = '#80808080';
console.log(rgba.a); // 0.5
console.log(rgba.rgba); // rgba(128,128,128,0.5)
rgba.r = 192;
rgba.a = 0.25;
console.log(rgba.hex);  //#C0808040

rgba.color = 'rgba(1,2,3,0.70)';
rgba.b *= 10;
console.log(rgba.hex);  //#01021EB3









function App() {
    return (
        <div className="App">



















        </div>
    );
}
export default App;
