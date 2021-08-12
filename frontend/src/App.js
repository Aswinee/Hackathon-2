import "./App.css";
import { Button, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Home from "./Home";
import Questions from "./Questions";
import Tags from "./Tags";
import Jobs from "./Jobs";

function App() {
  return (
    <>
      <div className="App">
        <div className="head">
          <img
            src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
            width="200"
            height="50"
          />
          <Button
            className="loginbutton headButtons float-right"
            variant="light"
          >
            Login
          </Button>{" "}
          <Button
            className="signupbutton headButtons float-right"
            variant="primary"
          >
            Sign up
          </Button>
        </div>
      </div>

      <div className="container">
        <BrowserRouter>
          <div className="nav">
            <Navbar fixed="right" bg="light" expand="md">
              <Nav defaultActiveKey="/home" className="flex-column">
                <Link className="Navbutton" to="/">
                  User info
                </Link>
                <Link className="Navbutton" to="/questions">
                  Questions
                </Link>
                <Link className="Navbutton" to="/tags">
                  Tags
                </Link>
                <Link className="Navbutton" to="/jobs">
                  Jobs
                </Link>
              </Nav>
            </Navbar>
          </div>

          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/questions" render={() => <Questions />} />
            <Route path="/tags" render={() => <Tags />} />
            <Route path="/jobs" render={() => <Jobs />} />

            <Route path="/home">
              <Redirect to="/" />
            </Route>
            <Route path="*">
              <p>404 page!</p>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
