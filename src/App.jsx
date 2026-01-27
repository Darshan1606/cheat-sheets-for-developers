import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GitCheatSheet from "./components/GitCheatSheet";
import SQLCheatSheet from "./components/SQLCheatSheet";
import MongoDBCheatSheet from "./components/MongoDBCheatSheet";
import RedisCheatSheet from "./components/RedisCheatSheet";
import DockerCheatSheet from "./components/DockerCheatSheet";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/git" element={<GitCheatSheet />} />
        <Route path="/sql" element={<SQLCheatSheet />} />
        <Route path="/mongodb" element={<MongoDBCheatSheet />} />
        <Route path="/redis" element={<RedisCheatSheet />} />
        <Route path="/docker" element={<DockerCheatSheet />} />
      </Routes>
    </>
  );
}

export default App;
