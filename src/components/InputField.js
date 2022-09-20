import React from "react";

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ""
    };
  }

  onInput = (event) => {
    this.setState({
      description: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.description);
    this.setState({
      description: ""
    });
  };

  render() {
    return (
    <div className="input-field">   
      <form onSubmit={this.onSubmit}>
        <input
            type="text"
            onChange={this.onInput}
            value={this.state.description}
            placeholder="Add a grocery item"
          />
        <input type="submit" value="Add" />
      </form>
    </div>  
    );
  }
}

export default InputField;
