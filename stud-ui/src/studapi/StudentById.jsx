import React, { Component } from 'react'
import axios from "axios";

export class StudentById extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            id:0,
          Student:[]
        };
      }
      onsubmit=()=> {
        axios.get(`http://localhost:8080/student/id/${this.state.id}`)
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
      
      changeHandler=(evnt)=>{
          this.setState({
              id:evnt.target.value
          })
      }

      render() {
        const { Student, errorMsg } = this.state;
        return (
          <div className='saveStudent'>
            List of posts
            {Student.length ? 
            Student.map(post => <div key={post.id}> {Student.title}</div>)
              : null}
            {errorMsg ? <div>{errorMsg}</div> : null}
            <div>
        Student ID:   <input type="text" name="id" value={this.state.id} onChange={this.changeHandler}/>
                     </div>
            <button onClick={this.onsubmit}>getStudent</button>
          </div>
        );
      }
    }
    

export default StudentById
