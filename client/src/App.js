import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Contributors } from './components/contributors';
import { Home } from './components/home';
import { JoinUs } from './components/joinUs';
import { Testimonial } from './components/testimonial';

function App() {
    return (
        <Router>
            <div className="App">
                {/* nav */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Logo</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/join-us">Join Us</Link>
                        </li>
                        <li>
                            <Link to="/contributors">Contributors</Link>
                        </li>
                        <li>
                            <Link to="/testimonial">Testimonial</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                {/* nav */}
            </div>
            <Switch>
                <Route path="/testimonial" component={Testimonial}></Route>
                <Route path="/join-us" component={JoinUs}></Route>
                <Route path="/contributors" component={Contributors}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/" component={Home}></Route>
            </Switch>
        </Router>
    );
}

export default App;
