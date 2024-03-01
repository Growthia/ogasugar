const Carousel = ()=> {
    return (
        <section className="absolute right-0 top-0 w-[40%] h-screen bg-white">
            {/* Loader */}
            <div className="absolute top-0 left-0 w-[40%] z-10 h-[4px] bg-orange-300" />

            {/* Memes view */}
            <div className="memes w-full h-full">
                {
                    Array(5).fill(0).map((_, idx)=> (
                        <div key={`meme-item-${idx}`} className="meme-item absolute left-0 top-0 w-full h-full overflow-hidden">

                            {/* Back image */}
                            <img src="/2.jpg" className="object-cover object-bottom w-full h-full" alt="meme" />

                            {/* Contents */}
                            <div className="w-[300px] whitespace-normal absolute right-8 top-8 z-10">
                                <h3 className="uppercase text-white font-bold tracking-widest">Sugar memes</h3>
                                <h1 className="text-4xl font-black text-orange-400 uppercase">Meme 99</h1>
                                <div className="mt-4">
                                    <q className="text-white text-2xl">Hmmm. How do humans evolve to become apes?</q>
                                </div>
                            </div>

                            {/* Main image */}
                            <div className="absolute left-0 top-0 w-full h-full flex items-start justify-start bg-black/40">
                                {/* Contents */}
                                {/* <div className="absolute right-8 top-8">
                                    <h1 className="text-8xl font-black font-CinzelDecorative">Issue 99</h1>
                                </div>
                                <div className="max-w-fit overflow-hidden">
                                    <img src="/2.jpg" className="w-[500px] h-[100vh] object-cover" alt="meme" />
                                </div> */}
                            </div>
                        </div>
                    ))
                }
            </div>
                {/* Thumbnails */}
            <div className="absolute bottom-[50px] right-[10px] w-max flex justify-between">
                <div className="flex gap-8 items-center mr-[50px]">
                    <button title="prev-memes" className="text-2xl w-[60px] h-[60px] text-white bg-transparent rounded-full border border-white flex items-center justify-center font-bold transition-all hover:bg-white hover:text-black group">
                        <span className="transition-transform group-hover:-translate-x-2">&larr;</span>
                    </button>
                    <button title="prev-memes" className="text-2xl w-[60px] h-[60px] text-white bg-transparent rounded-full border border-white flex items-center justify-center font-bold transition-all hover:bg-white hover:text-black group">
                        <span className="transition-transform group-hover:translate-x-2">&rarr;</span>
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {
                        Array(2).fill(0).map((_, idx)=> (
                            <div key={`meme-thumbnail-item-${idx}`} className="w-[120px] h-[170px] shrink-0 relative bg-transparent shadow-2xl rounded-[15px] overflow-hidden text-sm">
                                <img src={`/${idx+1}.jpg`} className="w-full h-full object-cover shadow-2xl" alt="meme" />
                                {/* <caption className="absolute top-0 left-0 w-full h-full flex items-start flex-col justify-end bg-black/20 pl-[20px] pb-[20px] text-white">
                                    <h2 className="font-bold">Home work</h2>
                                    <desc className="overflow-hidden whitespace-nowrap text-ellipsis">1+1 = 11</desc>
                                </caption> */}
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </section>
    )
}

export default Carousel;