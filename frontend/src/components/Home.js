import bg from "../images/explore.jpg";
import Card from "./Card";
import axios from'axios';
import React, { useEffect, useState } from 'react';


const Home = () => {
    const styles = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
      }
    
      return (
        <main className="h-screen w-screen box-border m-0" style={styles}>
            <div className="left-0 w-4/4 justify-center">
              <h3 className="font-semibold ">UNLOCKING THE HEART OF ADVENTURE</h3>
            </div>

            <div className="just">
            <h3 className="">Campfire Chronicles: Tales from the Tents</h3>
            </div>
        </main>
      );
}
export default Home