import { Provider } from "react-redux";
import "./App.css";

import store from "./store";

import SeachBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="content">
          <SeachBar />
          <VideoList />
          <VideoPlayer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
