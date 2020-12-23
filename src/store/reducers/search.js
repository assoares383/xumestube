const INITIAL_STATE = {
  videos: [],
  loading: false,
  error: false,
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "BUSCA_VIDEO_INICIO":
      return {
        videos: [],
        loading: true,
        error: false,
      };

    case "BUSCA_VIDEO_SUCESSO":
      return {
        videos: action.videos,
        loading: false,
        error: false,
      };

    case "BUSCA_VIDEO_ERRO":
      return {
        videos: [],
        loading: false,
        error: false,
      };

    default:
      return state;
  }
}
