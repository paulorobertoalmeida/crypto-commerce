import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css';
import React,{Component} from 'react';
import MetaMaskLoginButton from 'react-metamask-login-button';

 

function App() {
  return (
    <div>
     <Header />
     <MetaMaskLoginButton />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

