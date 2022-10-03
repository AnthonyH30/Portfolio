import MainContent from '../../Components/MainContent/MainContent';
import Sidebar from '../../Components/Sidebar/Sidebar';

import './home.scss'

function Home() {
  
  return (
    <div className="portfolio">
      <h1>Anthony Harisson</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default Home;
