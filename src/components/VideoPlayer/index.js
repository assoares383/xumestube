import React from "react";
import { connect } from "react-redux";
import { Advertisement, Embed } from "semantic-ui-react";

const VideoPlayer = (props) => {
  return (
    <div className="video-player">
      {!props.video.id && (
        <Advertisement
          style={{ height: "720px", width: "100%" }}
          unit="top banner"
          test="Escolha um vídeo para reproduzir"
        ></Advertisement>
      )}
      {props.video.id && (
        <div>
          <Embed
            style={{ height: "720px", width: "100%" }}
            id={props.video.id.videoId}
            source="youtube"
            placeholder="https://picsum.photos/seed/picsum/200/300"
          />
          <p>{props.video.snippet.title}</p>
          <p>{props.video.snippet.description}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    video: state.reproduces.video,
  };
};

export default connect(mapStateToProps, null)(VideoPlayer);
