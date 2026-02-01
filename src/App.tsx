import { Routes, Route } from "react-router-dom";
import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import GitCheatSheet from "@components/GitCheatSheet";
import SQLCheatSheet from "@components/SQLCheatSheet";
import MongoDBCheatSheet from "@components/MongoDBCheatSheet";
import RedisCheatSheet from "@components/RedisCheatSheet";
import DockerCheatSheet from "@components/DockerCheatSheet";
import AWSCheatSheet from "@components/AWSCheatSheet";
import DSACheatSheet from "@components/DSACheatSheet";
import LinuxCheatSheet from "@components/LinuxCheatSheet";
import AIMLCheatSheet from "@components/AIMLCheatSheet";
import PromptCheatSheet from "@components/PromptCheatSheet";
import LLMToolsCheatSheet from "@components/LLMToolsCheatSheet";

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
        <Route path="/aws" element={<AWSCheatSheet />} />
        <Route path="/dsa" element={<DSACheatSheet />} />
        <Route path="/linux" element={<LinuxCheatSheet />} />
        <Route path="/aiml" element={<AIMLCheatSheet />} />
        <Route path="/prompt" element={<PromptCheatSheet />} />
        <Route path="/llmtools" element={<LLMToolsCheatSheet />} />
      </Routes>
    </>
  );
}

export default App;
