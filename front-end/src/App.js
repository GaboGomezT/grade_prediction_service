import './App.css';
import axios from 'axios';
import { useState } from "react";

function App() {
  const [prediction, setPrediction] = useState(0);
  const [age, setage] = useState(0);
  const [Medu, setMedu] = useState(0);
  const [studytime, setstudytime] = useState(0);
  const [failures, setfailures] = useState(0);
  const [famrel, setfamrel] = useState(0);
  const [freetime, setfreetime] = useState(0);
  const [goout, setgoout] = useState(0);
  const [Walc, setWalc] = useState(0);
  const [health, sethealth] = useState(0);
  const [absences, setabsences] = useState(0);
  const payload = {
    "age": age,
    "Medu": Medu,
    "studytime": studytime,
    "failures": failures,
    "famrel": famrel,
    "freetime": freetime,
    "goout": goout,
    "Walc": Walc,
    "health": health,
    "absences": absences
  };

  

  function mySubmitHandler(event) {
    event.preventDefault();
    axios.post('https://cors-anywhere.herokuapp.com/https://f91p9y.deta.dev/grade_predict', payload)
    .then((response) => {
      setPrediction(response.data)
    });
  }

  function ageChange(e) {
    setage(e.target.value)
  }
  function MeduChange(e) {
    setMedu(e.target.value)
  }
  function studytimeChange(e) {
    setstudytime(e.target.value)
  }
  function failuresChange(e) {
    setfailures(e.target.value)
  }
  function famrelChange(e) {
    setfamrel(e.target.value)
  }
  function freetimeChange(e) {
    setfreetime(e.target.value)
  }
  function gooutChange(e) {
    setgoout(e.target.value)
  }
  function WalcChange(e) {
    setWalc(e.target.value)
  }
  function healthChange(e) {
    sethealth(e.target.value)
  }
  function absencesChange(e) {
    setabsences(e.target.value)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Grade ML</h1>
        <form onSubmit={mySubmitHandler} className="Form">
          <p>age</p>
          <input
            type="number" onChange={ageChange}
          />
          <p>mother's education (numeric: 0 - none, 1 - primary education (4th grade), 2 – 5th to 9th grade, 3 – secondary education or 4 – higher education):</p>
          <input
            type="number" onChange={MeduChange}
          />
          <p>weekly study time (numeric: 1 - 10 hours)</p>
          <input
            type="number" onChange={studytimeChange}
          />
          <p>number of past class failures</p>
          <input
            type="number" onChange={failuresChange}
          />
          <p>quality of family relationships (numeric: from 1 - very bad to 5 - excellent)</p>
          <input
            type="number" onChange={famrelChange}
          />
          <p>free time after school (numeric: from 1 - very low to 5 - very high)</p>
          <input
            type="number" onChange={freetimeChange}
          />
          <p>going out with friends (numeric: from 1 - very low to 5 - very high)</p>
          <input
            type="number" onChange={gooutChange}
          />
          <p>weekend alcohol consumption (numeric: from 1 - very low to 5 - very high)</p>
          <input
            type="number" onChange={WalcChange}
          />
          <p>current health status (numeric: from 1 - very bad to 5 - very good)</p>
          <input
            type="number" onChange={healthChange}
          />
          <p>number of school absences (numeric: from 0 to 93)</p>
          <input
            type="number" onChange={absencesChange}
          />
          <h3>Predict my grade!</h3>
          <input
            type='submit' className="btn"
          />
        </form>
        <h2>Predicted grade: {prediction}</h2>
      </header>
    </div>
  );
}

export default App;
