import { CiPlay1 } from "react-icons/ci"
import Modal from "./modal";
import { useRef } from "react";

const MediaSection = ()=> {

    const modalRef = useRef(null);

    return (
        <>
            <div className="relative w-[60%] h-screen">
                {/* Image display */}
                {/* <img src="/wp2565921.jpg" className="object-cover object-bottom w-full h-full" alt="cover" /> */}

                {/* Play button */}
                <div className="w-full h-full absolute left-0 top-0 bg-black/60 p-6 flex flex-col justify-between">

                    {/* Top section */}
                    <section>
                        
                    </section>

                    {/* Bottom section */}
                    <section>
                        <div className="flex items-center gap-6">
                            <button onClick={(()=> modalRef.current.openModal())} title="play new video" className="w-[90px] h-[90px] rounded-full border-4 border-green-400 text-green-200 flex items-center justify-center">
                                <CiPlay1 size={40} />
                            </button>
                            <div className="mt-4">
                                <h1 className="text-3xl font-bold text-green-400">Your ancestors</h1>
                                <p className="text-white">Released 4 February 2024</p>
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <h4 className="text-xl font-bold text-green-400">Others</h4>
                            <div className="mt-2 grid grid-cols-4 gap-4">
                                {
                                    Array(4).fill(0).map((_, idx)=> (
                                        <div onClick={(()=> modalRef.current.openModal())} key={`other-content-${idx}`} className="w-full h-[100px] rounded-lg bg-gray-300"></div>
                                    ))
                                }
                            </div>
                            
                        </div>
                    </section>
                </div>
            </div>

            {/* Play modal section */}
            <Modal ref={modalRef} />
        </>
    )
}

export default MediaSection;