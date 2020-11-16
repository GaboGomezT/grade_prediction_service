import './App.css';
import axios from 'axios';
import { useState } from "react";
function App() {
  const [prediction, setPrediction] = useState(0);
  const payload = {
    "age": 19,
    "Medu": 1,
    "studytime": 2,
    "failures": 1,
    "famrel": 4,
    "freetime": 2,
    "goout": 4,
    "Walc": 2,
    "health": 3,
    "absences": 0
  };

  axios.post('https://cors-anywhere.herokuapp.com/https://f91p9y.deta.dev/grade_predict', payload)
    .then((response) => {
      setPrediction(response.data)
    });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Grade ML</h1>
        {prediction}
        
      </header>
    </div>
  );
}

export default App;
