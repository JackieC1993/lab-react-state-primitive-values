import React, {useState} from "react";
import "./App.css";

const App = () => {
  const [score, setScore] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);
  const targetScore = 100 ;
  //function to handle the clicking the "+X" button
      const handleIncrement = ()=> {
        setScore(score + incrementValue);
      };
      //function to hnadle changing the increment value and spending points
      const handlePayPoints = () => {
        if (score >= 10) {
          setScore(score - 10);
          setIncrementValue (incrementValue + 1);
        } else {
          alert("You cant afford that!");
      }
    };
    //function to restart the game 
    const handleRestart = () => {
      setScore(0)
      setIncrementValue(1);
    };

    //check if the user has won the game
    const hasWon = score >= targetScore;
    
    return (
      <div className="App">
        <h1>Clicker Game</h1>
        {hasWon ? (
          <div>
        <h2>You Win!</h2>
        <button onClick={handleRestart}>Play again? </button>
      </div>
    ) : (
      <div>
        <p>Current Score: {score}</p>
        <button onClick={handleIncrement}>+{incrementValue}</button>
        <button onClick={handlePayPoints}>
          Pay 10 points to change from +{incrementValue} to +{incrementValue + 1}
        </button>
      </div>
    )}
    </div>
    );
};

export default App;
