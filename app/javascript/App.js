import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Greeting from "./components/Greeting";
import { Provider } from "react-redux";
import store from "./Redux/configureStore"

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Greeting />
            </Router>
        </Provider>
    );
            
    }

export default App;