import React, { Component } from 'react'
import axios from "axios";

export class CallAPI extends Component {
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
          <div>
            List of posts
            {Student.length ? 
            Student.map(post => <div key={post.id}> {post.title}</div>)
              : null}
            {errorMsg ? <div>{errorMsg}</div> : null}
            <button onClick={this.onsubmit}>Get All Student</button>
          </div>
        );
      }
    }
    

export default CallAPI
