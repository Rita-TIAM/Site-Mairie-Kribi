import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/" component={Footer} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};
// function App() {
//   return (
//     <div className="App">
//       <HomePage />
//       <Footer />
//     </div>
//   );
// }

export default App;
