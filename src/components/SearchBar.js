import React from "react";
import { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputChange = e => {
    this.setState({ term: e.target.value }, () => console.log(this.state.term));
  };

  onFormSubmit = e => {
      e.preventDefault();

      //TODO: make sure we call callback from parent component
      this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
