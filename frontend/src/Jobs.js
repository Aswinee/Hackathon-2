import React from "react";
import axios from "axios";

import { Table } from "react-bootstrap";

const API_URL = "https://hackathon2guvi.herokuapp.com/jobs";

class Jobs extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      role: "",
      company: "",
      skill: [],
      postDate: "",
      salary: "",
    };
  }

  componentDidMount = () => this.getTags();

  getTags = async () => {
    try {
      const { data } = await axios.get(API_URL);
      this.setState({ jobs: data });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <>
        <p>
          <h3 className="pageHeading">Jobs</h3>
        </p>

        <Table striped bordered hover className="table ">
          <thead>
            <tr>
              <th>Role</th>
              <th>Company</th>
              <th>Skill</th>
              <th>Posted </th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.jobs.map((job) => {
              return (
                <tr key={job._id}>
                  <td>{job.role}</td>
                  <td>{job.company}</td>
                  <td>
                    {job.skill.map((s) => {
                      return (
                        <ul>
                          <li>{s}</li>
                        </ul>
                      );
                    })}
                  </td>
                  <td>{job.postDate}</td>
                  <td>{job.salary}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  }
}

export default Jobs;
