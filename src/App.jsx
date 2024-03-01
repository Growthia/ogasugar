import { useGSAPAnimation } from "./utils/hooks"
import Socials from "./components/common/socials";
import Carousel from "./components/ui/carousel";
import MediaSection from "./components/ui/media-section";
import Cursor from "./components/ui/cursor";

export default function App() {

  useGSAPAnimation(()=> {

  });

  return (
    <>
      <div className="w-screen h-screen bg-[#111]">
          <Socials />
          <MediaSection />
          <Carousel />
          <Cursor />

          {/* page content */}
          <div className="absolute top-[20%] left-1/3">
            {/* <h1 className="text-7xl font-black text-green-400">Ogasugar</h1> */}
          </div>
      </div>
    </>
  )
}