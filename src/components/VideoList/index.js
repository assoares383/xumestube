import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Image, Dimmer, Loader } from "semantic-ui-react";

import { playVideo } from "../../store/actions/play-video";

class VideoList extends Component {
  renderVideo(video) {
    return (
      <List animated verticalAlign="middle" key={video.etag}>
        <List.Item onClick={() => this.props.reproduces(video)}>
          <Image avatar src={video.snippet.thumbnails.default.url} />
          <List.Content>
            <List.Header>{video.snippet.title}</List.Header>
          </List.Content>
        </List.Item>
      </List>
    );
  }

  render() {
    return (
      <div className="video-list">
        {this.props.loading && (
          <Dimmer active inverted>
            <Loader size="medium">Carregando...</Loader>
          </Dimmer>
        )}
        {this.props.videos.map((video) => {
          return this.renderVideo(video);
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reproduces: (video) => dispatch(playVideo(video)),
  };
};

const mapStateToProps = (state) => {
  return {
    videos: state.search.videos,
    loading: state.search.loading,
    erro: state.search.error,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
