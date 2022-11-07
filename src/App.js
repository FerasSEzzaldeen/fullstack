import React, { useState } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import NavBar from './components/UI/SideBar/SideBar';
import styled from "styled-components"
import MainPage from './components/pages/main/MainPage';



const Main = styled.main`
  margin: 0;
  display: flex;
`;

const MainScreen = styled.div`
  width: 85%;
  background-color: #fff;
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <Main>
        <NavBar/>
        <MainScreen>
          <MainPage />
        </MainScreen>
      </Main>

    </React.Fragment>
  );
}

export default App;
