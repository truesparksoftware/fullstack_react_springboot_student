import React from 'react';
import CallAPI from './StudAPI/CallAPI';
import PostForm from './StudAPI/PostForm';
import CallAPI_ID from './StudAPI/CallAPI_ID';
import Delete_ID from './StudAPI/Delete_ID';

function App() {
  return (
    <div >
      <h3>Get All API</h3>
      <CallAPI/><br/>
      <h3>Save Student</h3>
      <PostForm/><br/>
      <h3>Get Student By Id</h3>
      <CallAPI_ID/><br/>
      <h3>Delete Student by Id</h3>
      <Delete_ID/><br/>
    </div>
  );
}

export default App;
