const Card = ({image}) => {
    return (
        <div className="group w-[16rem] h-[18rem] lg:mr-8 overflow-hidden cursor-pointer nb-6 lg:mb-0 ">
            <div className="h-[60] group-hover:scale-110 duration-500">
                <img src={image} />
            </div>

            <div className="h-[50%] bg-gray-300 p-4">
                <h1>Lake Bogoria</h1>
                <p className="text-sm">Lake Bogoria (formerly Lake Hannington) is a saline, alkaline lake that lies in a volcanic region in a half-graben basin south of Lake Baringo, Kenya, a little north of the equator</p>
            </div>
        </div>
    )
}

export default Card