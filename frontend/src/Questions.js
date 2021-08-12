import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";
import React from "react";
import axios from "axios";

const API_URL = "https://hackathon2guvi.herokuapp.com/questions";

class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      name: "",
      body: "",
      topic: [],
      views: null,
      answers: null,
      votes: null,
    };
  }

  componentDidMount = () => this.getQuestions();

  getQuestions = async () => {
    try {
      const { data } = await axios.get(API_URL);
      this.setState({ questions: data });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <>
        <p>
          <h3 className="pageHeading">Questions:</h3>
        </p>

        <Table bordered hover className="table questionTable" bordered={false}>
          <thead></thead>
          <tbody>
            {this.state.questions.map((question) => {
              return (
                <tr key={question._id}>
                  <td>
                    <div>
                      <p className="questionNumbers">
                        {question.votes}
                        <br />
                        <span style={{ fontSize: "12px" }}>votes</span>
                      </p>

                      <p className="questionNumbers">
                        {question.answers}
                        <br /> <span style={{ fontSize: "12px" }}>answers</span>
                      </p>
                      <p className="questionNumbers">
                        {question.views}
                        <br /> <span style={{ fontSize: "12px" }}>views</span>
                      </p>
                    </div>
                  </td>
                  <div>
                    <h5 style={{ color: "rgb(26, 66, 139)" }}>
                      {question.name}
                    </h5>
                    <br />
                    <p style={{ color: "rgb(26, 66, 139)" }}>
                      {question.body}
                    </p>{" "}
                    <br />
                    {question.topic.map((s) => {
                      return (
                        <button
                          className="topicButton"
                          style={{
                            marginBottom: "27px",
                            marginRight: "5px",
                            backgroundColor: "#cddfe4",
                            borderRadius: "5px",
                            borderStyle: "none",
                            color: "#1313a0",
                          }}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  }
}

export default Questions;
