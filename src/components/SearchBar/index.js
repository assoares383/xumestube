import React, { Component } from "react";
import { Segment, Input } from "semantic-ui-react";

import "./styles.css";

class SeachBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <Segment stacked>
          <Input icon="search" size="large" placeholder="Search ..." />
        </Segment>
      </div>
    );
  }
}

export default SeachBar;
