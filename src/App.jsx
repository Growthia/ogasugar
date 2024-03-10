import { useEffect } from "react";
import BackgroundMusicPlay from "./components/common/background-music-play";
import Sidebar from "./components/common/sidebar";
import Showcase from "./components/common/showcase";

export default function App() {

  return (
    <>
      <div className="w-screen h-screen bg-[#111]">
         <Sidebar />
         <Showcase />
         <BackgroundMusicPlay />
      </div>
    </>
  )
}