import React from 'react';
import '../Style/App.sass';

import {BrowserRouter as Router} from 'react-router-dom';

import ScrollMenu from './ScrollMenu';
import SetComp from "./Content.jsx";
import NewMeal from "../components/NewMeal";

const App = () => {
  return (
    <Router>
        <div className="box">
            <h1>Zdrowe jedzonko</h1>
            <ScrollMenu/>
            <SetComp/>
            <NewMeal/>
        </div>
    </Router>
  );
}

export default App;
