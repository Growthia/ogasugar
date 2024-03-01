const Cursor = ()=> {
    return (
        <>
        {/* Cursot-dot-outlined */}
            <div className="cursor-dot-outlined absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full border border-red-400 bg-transparent" />
            {/* Cursor-dot */}
            <div className="cursor-dot absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-red-400" />
        </>
    )
}

export default Cursor;