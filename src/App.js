import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Photos from "./components/photos/Photos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/helpers/scrolltotop/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <Switch>
            <Route exact path="/" component={Banner} />
          </Switch>
          <Route
            path="/(.+)"
            render={() => (
              <div>
                <Navbar />
                <Switch>
                  <Route exact path="/services" component={Services} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/photos" component={Photos} />
                </Switch>
              </div>
            )}
          />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
