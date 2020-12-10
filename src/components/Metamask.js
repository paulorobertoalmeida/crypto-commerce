import React,{Component} from 'react';
import MetaMaskLoginButton from 'react-metamask-login-button';
import Login from './login';

class App extends Component {
    constructor() {
      super();
   }
    render() {
      return (
        <div>
          <MetaMaskLoginButton />
          <Login />
        </div>
      );
    }
  }
   
  ReactDOM.render(<App />, appElement);