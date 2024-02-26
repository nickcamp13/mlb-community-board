import CommunityBoard from "./components/CommunityBoard";
import "./App.css";
import playerData from "./data.js";

function App() {
  return (
    <>
      <h1>⚾️ MLB Player Showcase ⚾️</h1>
      <CommunityBoard players={playerData} />
    </>
  );
}

export default App;
