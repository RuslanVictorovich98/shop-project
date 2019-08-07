import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    test: {},
  }

  gettingProducts = async () => {
      const msg = await (await fetch('https://jsonplaceholder.typicode.com/todos/1'));
      console.log(msg);
      
        if(msg.ok === true && msg.status === 200) {
          let x = await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json();
          this.setState({test: x})
          console.log(this.state.test)    
          alert("Hello")
    }
  }

  render () {
      return (
          <div>
            <button onClick={this.gettingProducts}>Ok!</button>
          </div>
      )
  }


}

export default App;