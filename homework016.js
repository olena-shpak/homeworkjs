import logo from './logo.svg';
import './App.css';
import { click } from '@testing-library/user-event/dist/click';

// Чат
async function jsonPost(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
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

async function sendMessage(nick, message) {
    try {
        const timestamp = (new Date()).getTime();
        const result = await jsonPost('http://students.a-level.com.ua:10012', {
            func: 'addMessage',
            nick: nick,
            message: message,
            timestamp: timestamp
        });
        return result;
    } catch (error) {
        console.error('There was a problem sending message:', error.message);
        throw error;
    }
}

async function getMessages() {
    try {
        const result = await jsonPost('http://students.a-level.com.ua:10012', {
            func: 'getMessages',
            messageId: 0
        });
        return result.data;
    } catch (error) {
        console.error('There was a problem getting messages:', error.message);
        throw error;
    }
}

function displayMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `${message.nick}: ${message.message}`;

    // Отримуємо перший елемент у вікні чату (якщо він існує)
    const existingMessage = chatWindow.firstElementChild;

    // Додаємо нове повідомлення перед першим елементом (якщо він існує)
    if (existingMessage) {
        chatWindow.insertBefore(messageDiv, existingMessage);
    } else { // Якщо перший елемент відсутній, просто додаємо нове повідомлення в кінець
        chatWindow.appendChild(messageDiv);
    }
}


let messageId = 0;

const chatWindow = document.createElement('div');
chatWindow.id = 'chat-window';
chatWindow.style.border = '1px solid #ccc';
chatWindow.style.height = '300px';
chatWindow.style.overflowY = 'scroll';

const loginInput = document.createElement('input');
loginInput.id = 'login-input';
loginInput.placeholder = 'Enter your login';
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

async function checkLoop() {
    while (true) {
        const messages = await getMessages();
        messages.forEach(message => displayMessage(message));
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
}

sendButton.addEventListener('click', async (event) => {
    event.preventDefault();
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
}, 2000);

checkLoop();




// Посилання SWAPI

async function swapiLinks(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }
        const data = await response.json();
        const promises = [];
        const processedURLs = new Set();

        function replaceLinks(obj) {
            for (const key in obj) {
                if (typeof obj[key] === 'string' && obj[key].includes('https://swapi.dev/api')) {
                    if (!processedURLs.has(obj[key])) {
                        processedURLs.add(obj[key]);
                        promises.push(fetch(obj[key])
                            .then(res => {
                                if (!res.ok) {
                                    throw new Error(`Failed to fetch ${obj[key]}: ${res.statusText}`);
                                }
                                return res.json();
                            })
                            .then(json => {
                                obj[key] = json;
                                return replaceLinks(json);
                            })
                        );
                    }
                } else if (Array.isArray(obj[key])) {
                    obj[key].forEach((element, index) => {
                        if (typeof element === 'string' && element.includes('https://swapi.dev/api')) {
                            if (!processedURLs.has(element)) {
                                processedURLs.add(element);
                                promises.push(fetch(element)
                                    .then(res => {
                                        if (!res.ok) {
                                            throw new Error(`Failed to fetch ${element}: ${res.statusText}`);
                                        }
                                        return res.json();
                                    })
                                    .then(json => {
                                        obj[key][index] = json;
                                        return replaceLinks(json);
                                    })
                                );
                            }
                        }
                    });
                } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                    replaceLinks(obj[key]);
                }
            }
        }
        replaceLinks(data);
        await Promise.all(promises);
        return data;
    } catch (error) {
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
