import React from "react";

/**
 * @description Sidebar component
 * @returns {React.JSX.Element}
 * @signature opengrowthia.2024
 */
const Sidebar = ()=> (
    <>
        <div className="absolute right-0 top-0 h-screen w-[6dvw] bg-[#2D2E30] flex flex-col items-center justify-between">
                <div className="h-[65%] flex flex-col gap-6 items-center py-4">
                    <span className="h-[40%] bg-white w-[4px]" />
                    <p className="tracking-[1.4em] cursor-vertical-text text-sm font-extralight text-yellow-300 vertical-text">OGASUGAR</p>
                    <span className="h-[40%] bg-white w-[4px]" />
                </div>
                {/* Social links */}
                <div className="flex flex-col gap-2">
                    <a href="https://www.tiktok.com/@oga.sugar1" className="">
                        <span> </span>
                    </a>
                    {/* <a href="https://www.facebook.com/profile.php?id=100071998564214"></a>
                    <a href="https://www.instagram.com/oga_sugar?igsh=OGQ5ZDc2ODk2ZA=="></a>
                    <a href="https://www.youtube.com/@OgaSugar"></a> */}
                </div>
        </div>
    </>
)


export default Sidebar;