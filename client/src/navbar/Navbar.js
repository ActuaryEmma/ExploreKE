import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="flex text-white px-20 py-3 bg-black">
            <div className="flex items-center flex-1">
                <Link to="/" className="text-3x1 font-bold">ExploreKe</Link>
            </div>
            <div className="">
                <div className="">
                    <ul className="flex gap-8 text-[18px]">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link>SignUp</Link></li>
                    </ul>
                </div>
                
            </div>
            
        </div>
    )
}

export default NavBar;
