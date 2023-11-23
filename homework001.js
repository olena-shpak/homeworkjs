import logo from './logo.svg';
import './App.css';

let previousValue = parseFloat(prompt("Введіть попереднє значення лічильника газу:"));
let currentValue = parseFloat(prompt("Введіть теперішнє значення лічильника газу:"));
const tariff = 7.95689;
let consumptionCost = (currentValue - previousValue) * tariff;


       
     

function App() {
  return (    
    <div className="App">
          
          alert(`За спожитий газ ви повинні заплатити ${consumptionCost.toFixed(2)} грн.`);
         
          {/* // Розрахунок вартості електроенергії */}
         
     
  
</div>
  );
}
export default App;
