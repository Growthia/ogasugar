import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const Socials = ()=> {

    const ICON_SIZE=30;

    const socials = [
        {
            icon: <CiTwitter size={ICON_SIZE} />,
            as: "twitter",
            stat: "44k"
        },
        {
            icon: <CiFacebook size={ICON_SIZE} />,
            as: "facebook",
            stat: "32k"
        },
        {
            icon: <CiInstagram size={ICON_SIZE} />,
            as: "instagram",
            stat: "28k"
        }
    ]

    return (
        <>
            {/* Navbar for social media links */}
            <aside className="bg-[#292929] rounded-b-lg fixed top-0 left-4 p-2 flex flex-col items-center text-orange-200 z-10">
                {
                    socials.map((social, idx)=> (
                        <div key={idx} className="flex flex-col items-center justify-center py-3">
                            { social.icon }
                            {/* <span className="font-bold ml-2">{social.stat}</span> */}
                        </div>
                    ))
                }
            </aside>
        </>
    )
}

export default Socials;