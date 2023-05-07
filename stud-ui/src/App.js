import { BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom';
import React from 'react';
import CallAPI from './StudAPI/CallAPI';
import PostForm from './StudAPI/PostForm';
import CallAPI_ID from './StudAPI/CallAPI_ID';
import Delete_ID from './StudAPI/Delete_ID';

function App() {
  return (
    <div>
   <Router>
  <ul>
 <li>
   <Link to="/AllStudent" >AllStudent</Link>
  </li>
<li>
 <Link to="/SaveStudent" >SaveStudent</Link>
</li>
 <li>
 <Link to="/getStudentById" >Get Student By ID</Link>
 </li>
 <li>
 <Link to="/DeleteStudent" >Delete Student</Link>
 </li>
 </ul>
 <Routes>
 <Route path='/AllStudent' element={<CallAPI/>}></Route>
 <Route path='/SaveStudent' element={<PostForm/>}></Route>
   <Route path='/getStudentById' element={<CallAPI_ID/>}></Route>
   <Route path='/DeleteStudent' element={<Delete_ID/>}></Route>
   </Routes>
</Router>
 </div>
  );
}

export default App;
