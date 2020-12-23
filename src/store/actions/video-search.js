import youtubeSearch from "youtube-api-v3-search";
import YTApi from "./../../services/api";

const API_KEY = YTApi;

export const searchVideoStart = () => {
  return {
    type: "BUSCA_VIDEO_INICIO",
    loading: true,
    error: false,
  };
};

export const searchVideoSuccess = (videos) => {
  return {
    type: "BUSCA_VIDEO_SUCESSO",
    videos,
    loading: false,
    error: false,
  };
};

export const searchVideoError = () => {
  return {
    type: "BUSCA_VIDEO_ERRO",
    loading: false,
    error: true,
  };
};

export const searchVideo = (term) => {
  return (dispatch) => {
    dispatch(searchVideoStart());
    youtubeSearch(API_KEY, { q: term }).then((data) =>
      dispatch(searchVideoSuccess(data.items)).catch(() =>
        dispatch(searchVideoError)
      )
    );
  };
};
