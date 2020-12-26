import React from "react";
import { connect } from "react-redux";
import { List, Image } from "semantic-ui-react";

const VideoList = (props) => {
  return (
    <div className="video-list">
      <List animated verticalAlign="middle">
        <List.Item>
          <Image avatar src="" />
          <List.Content>
            <List.Header>Título do Vídeo</List.Header>
          </List.Content>
        </List.Item>
      </List>

      <p>{JSON.stringify(props)}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    videos: state.search.videos,
    loading: state.search.loading,
    erro: state.search.error,
  };
};

export default connect(mapStateToProps, null)(VideoList);
