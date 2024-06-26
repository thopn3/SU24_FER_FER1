import { Component } from "react";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {count: 0};
  }

  componentDidMount(){
    console.log("Component mouting");
  }

  componentDidUpdate(prevState){
    if(prevState.count !== this.state.count)
      console.log("Component updated");
  }

  componentWillUnmount(){
    console.log("Component unmouting");
  }

  increment = () => {
    // thay doi trang thai du lieu cua bien count
    this.setState(prevState => ({count: prevState.count+1}));
  }

  decrement = () => {
    this.setState(prevState => ({count: prevState.count-1}));
  }

  render(){
    return (
      <div>
        <p>Count: {this.state.count} times</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
