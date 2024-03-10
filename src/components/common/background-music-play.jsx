import { useEffect, useRef } from "react";

/**
 * @returns {React.JSX.Element}
 * @description Component for playing background music
 * @signature opengrowthia.2024
 */
const BackgroundMusicPlay = ()=> {
    /**
     * @type React.MutableRefObject<HTMLAudioElement>
     * @description Reference to the audio element that will play the background music for Ogasugar
     * @signature opengrowthia.2024
     */
    const audioRef = useRef(null);

    // useEffect(()=> {
    //     audioRef.current.play();
    // }, [])

    return (
        <>
            <audio ref={audioRef} autoPlay loop>
                <source src="/music/music.mp3" type="audio/mp3" />
                {/* Your browser does not support the audio html element */}
            </audio>
        </>
    )
}

export default BackgroundMusicPlay;