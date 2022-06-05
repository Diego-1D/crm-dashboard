import React from "react";
import { BrowserRouter} from "react-router-dom";
import {Container, Wrapper} from "./globalStyles"
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Routes from "./routes"

function App() {
  return (
    <BrowserRouter>
       <Container>
        <Sidebar/>
                <Wrapper>
                  <Navbar/>
                    <Header />
                    <Routes />
                </Wrapper>
            </Container>
    </BrowserRouter>
  );
}

export default App;
