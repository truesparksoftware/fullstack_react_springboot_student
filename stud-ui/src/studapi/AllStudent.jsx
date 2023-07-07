import React, { Component } from 'react'
import axios from "axios";

export class AllStudent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          Student:[]
        };
      }
      onsubmit=()=>{
        axios.get("http://localhost:8080/student/all")
          .then(respone => {
            this.setState({
              Student: respone.data
            });
            console.log(respone.data);
          })
          .catch(error => {
            console.log(error);
            this.setState({
                errorMsg: "Error while retriving data"
            });
          });
      }

      render() {
        const { Student, errorMsg } = this.state;
        return (
          <div className='saveStudent'>
            List of posts
            <table cellPadding="5" cellSpacing="5">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Class</th>
                </tr>
            </thead>
            <tbody>
            {Student.length ? 
            Student.map(post => <tr>
              <td>{post.id}</td>
              <td>{post.name}</td>
              <td>{post.address}</td>
              <td>{post.clas}</td>
          </tr>)
              : null}
            {errorMsg ? <div>{errorMsg}</div> : null}
            </tbody>
            </table>
            <button onClick={this.onsubmit}>Get All Student</button>
          </div>
        );
      }
    }
    

export default AllStudent
