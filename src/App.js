import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Wrapper } from "./globalStyles"
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Container>
        <Sidebar />
        <Wrapper>
          <Navbar />
          <Header />
          <Routes>
            <Route exact path="/crm-dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
          </Routes>
        </Wrapper>
      </Container>
    </BrowserRouter>
  );
}

export default App;
