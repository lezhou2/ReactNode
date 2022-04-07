//if file is a class, name it with upper case, if file is a function, name it a lower case
//import front end using webpack and babel give access ES2015 to do import
//backend is node js support common js which support Require
//App.js is for view setup
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

// functional component
const App = () => {
    return (
        //jsx
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;