import React, { Component } from "react";
import { Segment, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { searchVideo } from "../../store/actions/video-search";

import "./styles.css";

class SeachBar extends Component {
  searchTerm = (e) => {
    if (e.keyCode === 13) {
      const term = e.target.value;
      console.log(term);
      this.props.searchVideo(term);
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

const mapDispatchToProps = (dispatch) => {
  return {
    searchVideo: (term) => dispatch(searchVideo(term)),
  };
};

export default connect(null, mapDispatchToProps)(SeachBar);
