import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/User/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';



const App = (props) => {

  return (
    <div className="app__wrapper">
      <HeaderContainer/>
      <div className='app__row'>
        <NavbarContainer/>
        <div className='app__content'>
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer/>} />
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/users' element={<UsersContainer/>} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/friends' element={<Friends />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
