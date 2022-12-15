import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import {useState} from 'react';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercise Tracker</h1>
        <p>This application tracks all the exercises with their dates and other details</p>
      </header>
      <main>
        <Router>
          <div className="App-body">
            <Route path="/" exact>
              <HomePage  setExerciseToEdit={setExerciseToEdit} />
            </Route>
            <Route path="/create-exercise">
              <CreateExercisePage />
            </Route>
            <Route path="/edit-exercise">
              <EditExercisePage exerciseToEdit={exerciseToEdit}/>
            </Route>
          </div>
        </Router>
      </main>
      <footer>
        &#169; 2022 Serkan Bayramoglu
      </footer>
    </div>
  );
}

export default App;
