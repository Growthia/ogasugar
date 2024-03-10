
/**
 * @description Ogasugar Showcase component
 * @returns {React.JSX.Element}
 * @signature opengrowthia.2024
 */
const Showcase = ()=> (
    <>
        <section className="absolute left-0 top-0 h-screen w-[calc(100vw-6.5dvw)]">
            {/* Thumbnails */}
            <div className="absolute bottom-[20px] right-[20px] gap-8 grid grid-cols-3 w-[40%]">
                {
                    Array(3).fill(0).map((_, idx)=> (
                        <div key={idx} className="w-full h-[200px] rounded-2xl bg-white" />
                    ))
                }
            </div>  
        </section>
    </>
)

export default Showcase;