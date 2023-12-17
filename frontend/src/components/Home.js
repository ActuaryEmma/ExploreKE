import bg from "../images/paxx.jpg"
import { Link } from "react-router-dom"

const Home = () => {
    const styles = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        backgroundRepeat: 'repeat',
        height: '100vh'
      }
    
      return (
        <main className="overflow-hidden m-0 p-0 max-w-full" style={styles}>
            <div className="flex flex-col text">
              <h3 className="text-5xl font-bold text-white pt-10 pl-6">UNLOCKING</h3>
              <h3 className="text-5xl font-bold text-white pl-6">THE HEART</h3>
              <h3 className="text-5xl font-bold text-white pl-6"></h3>
              <h3 className="text-5xl font-bold text-white pl-6">OF ADVENTURE</h3>
              <h4 className="text-5xl font-bold text-green-800 pl-6">ONE TALE AT A TIME</h4>
            </div>
            <Link to="/articles"></Link>
            <div className="just">
            </div>
        </main>
      );
}
export default Home