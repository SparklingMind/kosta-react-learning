import './App.css';

import { Route, Routes } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Home from './pages/board/Home';
import Detail from './pages/board/Detail';
import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';
import UpdateForm from './pages/board/UpdateForm';
import SaveForm from './pages/board/SaveForm';

function App() {
  return (
    <div>
      <Container>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/saveForm' element={<SaveForm/>}/>
          <Route path='/board/:id' element={<Detail/>}/>
          <Route path='/updateForm/:id' element={<UpdateForm/>}/>
          <Route path='/loginForm' element={<LoginForm/>}/>
          <Route path='/joinForm' element={<JoinForm/>}/>
        </Routes>
     </Container>
    </div>
  );
}

export default App;
