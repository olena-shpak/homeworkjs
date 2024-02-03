import logo from './logo.svg';
import './App.css';

// ДЗ:  Рекурсія та Винятки
// Рекурсія: HTML tree
function htmlTree(data) {
    if (typeof data === 'string') {
        return data;
    }

    const { tagName, attrs, children } = data;
    let htmlString = `<${tagName}`;

    if (attrs) {
        for (const [attr, value] of Object.entries(attrs)) {
            htmlString += ` ${attr}="${value}"`;
        }
    }

    htmlString += ">\n";

    if (children && Array.isArray(children)) {
        for (const child of children) {
            htmlString += htmlTree(child);
        }
    }

    htmlString += `</${tagName}>\n`;

    return htmlString;
}

const table = {
    tagName: 'table',
    attrs: {
        border: "1",
    },
    children: [
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["1x1"],
                },
                {
                    tagName: "td",
                    children: ["1x2"],
                },
            ]
        },
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["2x1"],
                },
                {
                    tagName: "td",
                    children: ["2x2"],
                },
            ]
        }
    ]
};

const htmlString = htmlTree(table);
document.write(htmlString);


// Рекурсія : DOM дерево
{
    function domTree(parent, data) {
        const element = document.createElement(data.tagName);
        if (data.attrs) {
            for (const [key, value] of Object.entries(data.attrs)) {
                element.setAttribute(key, value);
            }
        }
        if (data.children) {
            for (const childData of data.children) {
                domTree(element, childData);
            }
        }
        else if (data.text) {
            element.textContent = data.text;
        }


        parent.appendChild(element);

        return element;
    }
    const table = {
        tagName: 'table',
        attrs: {
            border: "1",
        },
        children: [
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["1x1"],
                    },
                    {
                        tagName: "td",
                        children: ["1x2"],
                    },
                ]
            },
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["2x1"],
                    },
                    {
                        tagName: "td",
                        children: ["2x2"],
                    },
                ]
            }
        ]
    }
    domTree(document.body, table)
}

// Рекурсія : Deep Copy
{
    function deepCopy(obj) {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }

        if (Array.isArray(obj)) {
            return obj.map(item => deepCopy(item));
        }

        const newObj = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = deepCopy(obj[key]);
            }
        }

        return newObj;
    }

    const arr = [1, "string", null, undefined, { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false];
    const arr2 = deepCopy(arr);
    console.log(arr2);

    const table = {
        tagName: 'table',
        attrs: {
            border: "1",
        },
        children: [
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["1x1"],
                    },
                    {
                        tagName: "td",
                        children: ["1x2"],
                    },
                ]
            },
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["2x1"],
                    },
                    {
                        tagName: "td",
                        children: ["2x2"],
                    },
                ]
            }
        ]
    };

    const table2 = deepCopy(table);
    console.log(table2);
}

// Рекурсія : My Stringify

function stringify(obj) {
    if (obj === null || obj === undefined) {
        return 'null';
    }

    if (typeof obj === 'string') {
        return `"${obj}"`;
    }

    if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
            const arrayString = obj.map(item => stringify(item)).join(',');
            return `[${arrayString}]`;
        } else {
            const objectString = Object.entries(obj)
                .map(([key, value]) => `"${key}":${stringify(value)}`)
                .join(',');
            return `{${objectString}}`;
        }
    }

    return String(obj);
}

const arr = [1, "string", null, undefined, { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false];
const jsonString = stringify(arr);

console.log(jsonString);
console.log(JSON.parse(jsonString));


// Рекурсія : getElementById throw

function getElementById(idToFind) {
    let foundElement;
    function walker(parent) {
        for (const child of parent.children) {
            if (child.id === idToFind) {
                foundElement = child;
                throw { foundElement: child };
            }

            if (child.children.length > 0) {
                walker(child);
            }
        }
    }

    walker(document.body);

    if (foundElement) {
        return foundElement;
    } else {
        return null;
    }
}

try {
    const resultElement = getElementById("root");
    console.log("Знайдено елемент:", resultElement);
} catch (e) {
    if (e.foundElement) {
        console.log("Елемент знайдено:", e.foundElement);
    } else {

        console.log('Елемент не знайдено.');
    }

}
getElementById("myid");




function App() {
    return (
        <div className="App">



















        </div>
    );
}
export default App;
