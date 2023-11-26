import bg from "../images/explore.jpg";
import Card from "./Card";


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
            <div className="left-0 w-1/2 p-60 justify-center">
              <h3 className="font-semibold ">UNLOCKING THE HEART OF ADVENTURE</h3>
            </div>

            <div className="just">
              <h2>Top Locations</h2>
              <Card />
            </div>
        </main>
      );
    }
export default Home