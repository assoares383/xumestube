import React, { Component } from "react";
import { Segment, Input } from "semantic-ui-react";

import "./styles.css";

class SeachBar extends Component {
  searchTerm = (e) => {
    if (e.keyCode === 13) {
      const term = e.target.value;
      console.log(term);
    }
  };

  render() {
    return (
      <div className="search-bar">
        <Segment stacked>
          <Input
            icon="search"
            onKeyDown={(e) => this.searchTerm(e)}
            size="large"
            placeholder="Search ..."
          />
        </Segment>
      </div>
    );
  }
}

export default SeachBar;
