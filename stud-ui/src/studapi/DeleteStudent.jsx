import React, { Component } from 'react'
import axios from "axios";

export class DeleteStudent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            id:0,
          Student:[]
        };
      }
      onsubmit=()=> {
        axios.delete("http://localhost:8080/student/delete",{params: {id: this.state.id}})
          .then(respone => {
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
        Delete ID:   <input type="number" name="id" value={this.state.id} onChange={this.changeHandler}/>
                     </div>
            <button onClick={this.onsubmit}>Delete Student</button>
          </div>
        );
      }
    }
    

export default DeleteStudent
