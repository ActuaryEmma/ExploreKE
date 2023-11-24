import bg from "../images/explore.jpg";


const Home = () => {
    const styles = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
      }
    
      return (
        <main className="h-screen w-screen box-border m-0 overflow-hidden" style={styles}>
            <div className="flex items-center justify-center w-1/2"></div>
            <p> UNLOCKING THE HEART OF ADVENTURE</p>
        </main>
      );
    }
export default Home