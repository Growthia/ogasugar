import { motion as m, AnimatePresence } from "framer-motion"
import { FaTimes } from "react-icons/fa"
import { forwardRef, useImperativeHandle, useState } from "react";

const Modal = forwardRef((props, ref)=> {

    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, ()=> ({
        openModal(){
            setOpen(true)
        },

        closeModal(){
            setOpen(false)
        }
    }))

    return (
        <AnimatePresence>
            {
                open && (
                    <m.div
                    initial={{opacity: "0"}}
                    animate={{opacity: "1"}}
                    exit={{opacity: "0"}}

                    className="z-[99] w-full h-full bg-black/90 fixed top-0 left-0 flex items-center justify-center">
                        <m.div
                         initial={{translateY: "-50%", opacity: "0"}}
                         animate={{translateY: "0", opacity: "1"}}
                         exit={{translateY: "50%", opacity: "0"}}
                         className="w-[60%] h-[95%] bg-[#292929] rounded-2xl">

                            {/* Close button */}
                            <button onClick={()=> ref.current.closeModal()} title="close button" className="absolute text-gray-700 text-3xl top-4 right-4 flex items-center justify-center">
                                <FaTimes />
                            </button>

                        </m.div>
                    </m.div>
                )
            }
        </AnimatePresence>
    )
})


export default Modal;