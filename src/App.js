import "./App.css";

import SeachBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="container">
      <div className="content">
        <SeachBar />
        <VideoPlayer />
        <VideoList />
      </div>
    </div>
  );
}

export default App;
