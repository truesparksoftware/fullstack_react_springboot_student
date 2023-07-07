import React, { Component } from 'react'
import Axios from 'axios';
import '../App.css';

class SaveStudent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:12,
            name:'',
            address:'',
            clas:''
        }
    }
    changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitForm=e=>{
    e.preventDefault()
    console.log(this.state)
    Axios.post("http://localhost:8080/student/post",this.state)
    .then(response=>{
        console.log(response)
    }).catch(error=>{
        console.log(error)
    })
    }
    
    render() {
        const{id,name,address,clas}=this.state
        return (
            <div>
                <form  onSubmit={this.submitForm}>
                 <div>
                  Student ID:   <input type="text" name="id" value={id} onChange={this.changeHandler}/><br/><br/><br/>
                     </div>
                    <div>
                 Student Name:    <input type="text" name="name" value={name} onChange={this.changeHandler}/><br/><br/><br/>
                     </div>
                     <div>
                 Student Address:    <input type="text" name="address" value={address} onChange={this.changeHandler}/><br/><br/><br/>
                     </div>
                     <div>
                 Student Class:    <input type="text" name="clas" value={clas} onChange={this.changeHandler}/><br/><br/><br/>
                     </div>
                     <button type="submit">Save Student</button>
                </form>
            </div>
        )
    }
} 

export default SaveStudent
