const INITIAL_STATE = {
  video: {},
};

export default function playVideo(state = INITIAL_STATE, action) {
  if (action.type === "RESPRODUZ_VIDEO") {
    return {
      video: action.video,
    };
  } else {
    return state;
  }
}
