import { useSelector } from 'react-redux';
import './App.css';
import { Form } from './components/form/Form';
import { Home } from './components/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { AddEmployee } from './components/addEmployee/AddEmployee';
import { Header } from './components/header/Header';
import { EmployeList } from './components/employelist/EmployeList';
import { Footer } from './components/footer/Footer';
import { Setting } from './components/setting/Setting';
import { Lock } from './components/lock/Lock'
import { LockModel } from './components/lockModel/LockModel';
import { useState } from 'react';
import { Profile } from './components/profile/Profile';

function App() {
  const [showLockScreen, setShowLockScreen] = useState(false)
  const user = useSelector(state => state.loggedInUser)
  
  const pass = useSelector(state => state.lockPassword)
  const lockScreen = () => {
    if(pass){
      setShowLockScreen(true)
    } else{
      alert('First please set Lock Password ')
    }
  }
  return (
    <div className="App">
      <Router >
        {
          user &&  <Header />
        }
     
        <Routes>
          <Route path='/' exact element={<div>
                {
                  user ? <Home /> : <Form />
                }
          </div>}/>

            <Route path='/addemployee' exact element={<AddEmployee />} />
            <Route path='/employeelist' exact element={<EmployeList />} />
            <Route path='/settings' exact element={<Setting />} />
            <Route path='/profile' exact element={<Profile />} />
        </Routes>
                {
                  user &&  <div onClick={ lockScreen } ><Lock /></div>
                }
                {
                  showLockScreen && <LockModel setShowLockScreen = { setShowLockScreen }/>
                }
                
                {
                  user &&<Footer />
                }
      </Router>
    </div>
  );
}

export default App;
