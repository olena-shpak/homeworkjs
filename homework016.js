import logo from './logo.svg';
import './App.css';
import { click } from '@testing-library/user-event/dist/click';

// Чат
async function jsonPost(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with jsonPost:', error.message);
        throw error;
    }
}


// Додає нове повідомлення до чату
async function sendMessage(nick, message) {
    try {
        const result = await jsonPost('http://students.a-level.com.ua:10012', {
            func: 'addMessage',
            nick: nick,
            message: message,
            timestamp: timestamp =(new Date()).getTime()
        });
        return result;
    } catch (error) {
        console.error('There was a problem sending message:', error.message);
        throw error;
    }
}

// Отримує всі повідомлення з чату
async function getMessages() {
    try {
        const result = await jsonPost('http://students.a-level.com.ua:10012', {
            func: 'getMessages',
            messageId: 0 // Починаємо з першого повідомлення
        });
        return result.data; // Повертаємо тільки дані повідомлень
    } catch (error) {
        console.error('There was a problem getting messages:', error.message);
        throw error;
    }
}

// Функція для малювання повідомлень у DOM
function renderMessages(messages) {
    const container = document.getElementById('chat-container');
    container.innerHTML = ''; // Очистка контейнера
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        const timestamp = new Date(message.timestamp).toLocaleString();
        messageElement.innerHTML = `<strong>${message.nick}:</strong> ${message.message} (${timestamp})`;
        container.appendChild(messageElement);
    });
}

// Функція для надсилання повідомлення та оновлення відображення
async function sendAndCheck() {
    const nick = document.getElementById('nick-input').value;
    const message = document.getElementById('message-input').value;
    if (nick && message) {
        await sendMessage(nick, message);
        const messages = await getMessages();
        renderMessages(messages);
    } else {
        alert('Please enter both nickname and message.');
    }
}
let messageId = 0; // Оголошення messageId

const chatWindow = document.createElement('div');
chatWindow.id = 'chat-window';
chatWindow.style.border = '1px solid #ccc';
chatWindow.style.height = '300px';
chatWindow.style.overflowY = 'scroll';

const loginInput = document.createElement('input');
loginInput.id = 'login-input';
loginInput.placeholder ='Enter your login';
loginInput.style.width = '100%';

const messageInput = document.createElement('input');
messageInput.id = 'message-input';
messageInput.placeholder = 'Enter your message';
messageInput.style.width = '100%';

const sendButton = document.createElement('button');
sendButton.id = 'send-button';
sendButton.textContent = 'Send';
sendButton.style.width = '100%';

chatWindow.appendChild(loginInput);
chatWindow.appendChild(messageInput);
chatWindow.appendChild(sendButton);

document.body.appendChild(chatWindow);
// Функція для періодичної перевірки нових повідомлень
async function checkLoop() {
    while (true) {
        const messages = await getMessages();
        renderMessages(messages);
        await new Promise(resolve => setTimeout(resolve, 5000)); // Затримка 5 секунд перед наступною перевіркою
    }
}

function displayMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `${message.nick}: ${message.message}`;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; 
}
sendButton.addEventListener('click', async () => {
    const nick = loginInput.value;
    const message = messageInput.value;
    await sendMessage(nick, message);
    messageInput.value = ''; 
});



setInterval(async () => {
    try {
        const response = await jsonPost('http://students.a-level.com.ua:10012', { func: 'getMessages', messageId: messageId });
        const newMessages = response.data;
        newMessages.forEach(message => displayMessage(message));
        messageId = response.nextMessageId;
    } catch (error) {
        console.error(error);
    }
}, 5000);
checkLoop();



// Посилання SWAPI

async function swapiLinks(url){
    try {
        const response = await fetch(url);
        const data = await response.json();
        const promises =[];

        function replaceLinks(obj){
            for (const key in obj){
                if (typeof obj[key] === 'string' && obj[key].includes('https://swapi.dev/api')){
                    promises.push(fetch(obj[key])
                    .then(res => res.json())
                    .then(json => {
                        obj[key]= json;
                        return replaceLinks(json);
                    })
                  );
                } else if (Array.isArray(obj[key])) {
                    obj[key].forEach(element => {
                        if(typeof element === 'string' && element.includes('https://swapi.dev/api')){
                            promises.push(window.fetch(element)
                            .then(res => res.json())
                            .then(json => {
                                obj[key][obj[key].indexOf(element)] = json;
                                return replaceLinks(json);
                            })
                          );
                        }
                    });
                } else if (typeof obj[key] === 'object' && obj[key] !==null){
                    replaceLinks(obj[key]);
                }
            }
        }
        replaceLinks(data);
        await Promise.all(promises);
        return data;
    } catch(error) {
        console.error('Error', error);
        throw error;
    }
}

swapiLinks("https://swapi.dev/api/people/20")
.then(yodaWithLinks => console.log(JSON.stringify(yodaWithLinks, null, 4)))
.catch(error => console.error('Error', error));


// domEventPromise
const knopka = document.createElement('button');
knopka.textContent = 'Click me';
knopka.style.backgroundColor = 'skyblue';
knopka.style.borderRadius = '8px';
document.body.appendChild(knopka);

function domEventPromise(element, eventName) {
    function executor(resolve) {
        function eventHandler(e) {
            // Видаляємо обробник події перед резолвом промісу
            element.removeEventListener(eventName, eventHandler);
            resolve(e);
        }
        
        // Додаємо обробник події на вказаний елемент
        element.addEventListener(eventName, eventHandler);
    }

    return new Promise(executor);
}

// Виклик функції domEventPromise
domEventPromise(knopka, 'click').then(e => console.log('event click happens', e));














function App() {
    return (
        <div className="App">



















        </div>
    );
}
export default App;
