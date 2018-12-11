import React from "react";
import { Transition } from "react-transition-group";

class Example extends React.Component {
  state = {
    show: false,
    entered: false
  };

  render() {
    const { show } = this.state;
    return (
      <div style={{ paddingTop: "2rem" }}>
        <button
          onClick={() => {
            this.setState(state => ({
              show: !state.show
            }));
          }}
        >
          Toggle
        </button>
        <div style={{ marginTop: "1rem" }}>
          <Transition
            in={show}
            timeout={1000}
            unmountOnExit
            onEnter={(node, done) => {
              console.log(node);
              console.log(done);
            }}
          >
            {state => {
              switch (state) {
                case "entering":
                  return "Entering…";
                case "entered":
                  return "Entered!";
                case "exiting":
                  return "Exiting…";
                case "exited":
                  return "Exited!";
                default:
                  return "Error";
              }
            }}
          </Transition>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props)
  }
}

export default Example;