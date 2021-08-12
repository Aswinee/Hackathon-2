import React from "react";
import axios from "axios";

import { Table, Button } from "react-bootstrap";

const API_URL = "https://hackathon2guvi.herokuapp.com/tags";

class Tags extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: [],
      name: "",
      description: "",
      questions: null,
      today: null,
      week: null,
    };
  }

  componentDidMount = () => this.getTags();

  getTags = async () => {
    // API Call to server and get all posts
    try {
      const { data } = await axios.get(API_URL);
      this.setState({ tags: data });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <>
        <p>
          <h3 className="pageHeading">Tags</h3>
        </p>

        <Table striped bordered hover className="table ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Questions</th>
              <th>Today</th>
              <th>week</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tags.map((tag) => {
              return (
                <tr key={tag._id}>
                  <td>{tag.name}</td>
                  <td>{tag.description}</td>
                  <td>{tag.questions}</td>
                  <td>{tag.today}</td>
                  <td>{tag.week}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  }
}

export default Tags;
