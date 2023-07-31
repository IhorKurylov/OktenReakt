import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      },
      isOpen: false,
    };
  }

  handleInfoChange() {
    this.setState({
      car: {
        ...this.state.car,
        color: 'blue',
        year: 2022
      }
    });
  }

  handleIsOpenChange(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getUsers(){
    fetch('https://rickandmortyapi.com/api/character/')
  }


  componentDidMount() {
    console.log("MOUNT");
    this.interval = setInterval(()=> console.log('interval'), 1000)
    this.getUsers()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('UPDATE', prevProps, prevState, snapshot);
    console.log(this.state, prevState);
  }

  componentWillUnmount() {
    console.log("UnMOUNT");
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleInfoChange.bind(this)}>
          Change info
        </button>
        <button onClick={this.handleIsOpenChange.bind(this)}>
          Change isOpen
        </button>
        <p>{this.state.car.brand}</p>
        <p>{this.state.car.model}</p>
        <p>{this.state.car.color}</p>
        <p>{this.state.car.year}</p>
      </div>
    );
  }
}

export default ClassComponent;
