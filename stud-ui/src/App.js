import { BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom';
import React from 'react';
import AllStudent from './studapi/AllStudent';
import SaveStudent from './studapi/SaveStudent';
import StudentById from './studapi/StudentById';
import DeleteStudent from './studapi/DeleteStudent';

function App() {
  return (
    <div >
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
 <Route path='/AllStudent' element={<AllStudent/>}></Route>
 <Route path='/SaveStudent' element={<SaveStudent/>}></Route>
   <Route path='/getStudentById' element={<StudentById/>}></Route>
   <Route path='/DeleteStudent' element={<DeleteStudent/>}></Route>
   </Routes>
</Router>
 </div>
  );
}

export default App;
