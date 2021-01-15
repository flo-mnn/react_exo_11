import React, {Component} from 'react';


class App extends Component {


  state = {
    number: 0,
  }

  changeNumber = (op) => {
    let nombre = this.state.number;
    if (op==="+"){
      nombre += 1;
    } else {
      nombre -=1;
    };
    this.setState({
      number : nombre
    })
  };

  changeColor = (e) => {
    let number = e.target.parentElement.parentElement.querySelector('span');
    let toggle = number.classList.toggle('red');
    if(toggle){
      e.target.textContent = 'Turn it Back';
    }else {
      e.target.textContent = 'Turn it Red';
    };
  };

  render()  {
    return (
      <div className="App">
        <div className="numberDiv">
          <span>{this.state.number}</span>
        </div>
        <div className="btns">
          <button onClick={()=>this.changeNumber('+')}><i className="fas fa-plus"></i></button>
          <button onClick={()=>this.changeNumber('-')}><i className="fas fa-minus"></i></button>
          <button onClick={this.changeColor}>Turn It Red</button>
        </div>
      </div>
    );
  }
}

export default App;
