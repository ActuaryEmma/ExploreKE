const MidSection = () => {
    return (
        <div className="flex flex-col items-center lg:flex-row w-full justify-between text-green">
            <div className="flex flex-col items-center lg:items-start">
                <h3 className="pl-0 text-[3vw] font-medium">UNLOCKING THE HEART OF ADVENTURE</h3>
                <p className="text-[4vw] sn:text-[1.4rem] font-light">Find Your Next Adventure</p>
                <button className="px-8 py-2 mt-10 bg-black rounded-3xl text-[#5ee440]">Look Around</button>
            </div>

            <div className="mb-6 lg:mb-0">
                <h2 className="p-4 items-center flex-col">Top Locations Today</h2>

            </div>
        </div>
    )
}

export default MidSection