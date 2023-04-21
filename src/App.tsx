import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from './components/button-component';

interface Props{


}

interface State{
  showModal: boolean;
  result: number;
  operation: string;
  n1: number;
  n2: number;
}

export default class App extends React.Component<Props, State>{
  constructor(props:Props){
    super(props);
    this.state = {
      showModal: false,
      result: 0,
      operation: '+',
      n1: 15,
      n2: 15

    }

  }

  handlerOpenCloseModal(){
    console.log(this.state)
    this.setState({showModal:!this.state.showModal})

  }

  calculate(operation: string){
    const {n1, n2} = this.state;
    console.log(operation,n1, n2)
    if (operation === '+') {
      console.log('vai somar')
      this.setState({result: n1 + n2})
    } else if (operation === '-') {
      this.setState({result: n1 - n2})
    
    }
    console.log(this.state)
  
  }
  setOperation(operation:string){
    this.setState({operation});


  }

  render(){
    const {showModal} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <ButtonComponent 
          showModal={showModal} 
          handlerOpenCloseModal={()=>this.handlerOpenCloseModal()} 
          calculate={(value: string) => this.calculate(value)} 
          setOperation={(value: string) => this.setOperation(value)} 
          
          /> 

          <p>
            Meu Modal
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

