import Card from "./Card"
const Articles = () =>{
    return(
        <div className="w-full">
            <p className="text-green text-[1.4rem] front-medium text-center mt-4">Articles</p>
            <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-8">
                <Card image={require("../images/bogoria.jpeg")}/>
                <Card image={require("../images/bogoria.jpeg")}/>
                <Card image={require("../images/bogoria.jpeg")}/>
            </div>
        </div>
    )
}

export default Articles