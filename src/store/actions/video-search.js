import youtubeSearch from "youtube-api-v3-search";
import YTApi from "./../../services/api";

const API_KEY = YTApi;

export const searchVideoStart = () => {
  return {
    type: "BUSCA_VIDEO_INICIO",
    carregando: true,
    erro: false,
  };
};

export const searchVideoSuccess = (videos) => {
  return {
    type: "BUSCA_VIDEO_SUCESSO",
    videos,
    carregando: false,
    erro: false,
  };
};

export const searchVideoError = () => {
  return {
    type: "BUSCA_VIDEO_ERRO",
    carregando: false,
    erro: true,
  };
};

export const searchVideo = (term) => {
  return (dispatch) => {
    dispatch(searchVideoStart());
    youtubeSearch(API_KEY, { q: term })
      .then((data) => dispatch(searchVideoSuccess(data.items)))
      .catch(() => dispatch(searchVideoError))
    );
  };
};
