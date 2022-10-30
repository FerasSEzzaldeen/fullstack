import React, { useState } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import NavBar from './components/UI/NavBar/NavBar';
import styled from "styled-components"

const Main = styled.main`
  margin: 0;
  display: flex;
`;

const MainScreen = styled.div`
  width: 80%;
  background-color: skyblue;
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
        <MainScreen></MainScreen>
      </Main>

    </React.Fragment>
  );
}

export default App;
