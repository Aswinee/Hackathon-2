import {
  useHistory,
  useRouteMatch,
  useParams,
  useLocation,
} from "react-router-dom";
import Questions from "./Questions";
import Tags from "./Tags";
import Jobs from "./Jobs";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import { Button, Navbar, Nav } from "react-bootstrap";

function Home() {
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  const params = useParams();
  console.log(history, match, location, params);

  return (
    <>
      <div className="home-container">
        <h2>User Name: Aswinee</h2>

        <h5>Email: aswinee97@gmail.com</h5>
        <h6>Reputation: 5</h6>
        <h6>Votes: 3</h6>
        <h6>Questions: 0</h6>
        <br />

        <h6>About this app:</h6>
        <div className="para-container">
          <p>
            This is a sample full stack application of Stack overflow clone.
            This application consists of data from 'MongoDb atlas'. This api
            comprises of json data of
            <ul>
              <li>User profile</li>
              <li>Questions</li>
              <li>Tags</li>
              <li>Companies</li>
            </ul>
            To make this app, we mainly have made use of the{" "}
            <ul>
              <li>Node JS</li>
              <li>React JS</li>
              <li>MongoDb</li>
              <li>Express</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
