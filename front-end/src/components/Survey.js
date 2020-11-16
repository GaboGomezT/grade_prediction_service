import React from "react";

function Survey() {
  return (
    <div className="survey">
      <p>age</p>
        <input
          type="number"
        />
        <p>mother's education (numeric: 0 - none, 1 - primary education (4th grade), 2 – 5th to 9th grade, 3 – secondary education or 4 – higher education):</p>
        <input
          type="number"
        />
        <p>weekly study time (numeric: 1 - 10 hours)</p>
        <input
          type="number"
        />
        <p>number of past class failures</p>
        <input
          type="number"
        />
        <p>quality of family relationships (numeric: from 1 - very bad to 5 - excellent)</p>
        <input
          type="number"
        />
        <p>free time after school (numeric: from 1 - very low to 5 - very high)</p>
        <input
          type="number"
        />
        <p>going out with friends (numeric: from 1 - very low to 5 - very high)</p>
        <input
          type="number"
        />
        <p>weekend alcohol consumption (numeric: from 1 - very low to 5 - very high)</p>
        <input
          type="number"
        />
        <p>current health status (numeric: from 1 - very bad to 5 - very good)</p>
        <input
          type="number"
        />
        <p>number of school absences (numeric: from 0 to 93)</p>
        <input
          type="number"
        />
    </div>
  );
}

export default Survey;
