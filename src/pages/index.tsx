import Seo from "../Seo";
import NavBar from "../components/landing-page/NavBar";
import Banner from "../components/landing-page/Banner";
export default function Home() {
  return (
    <div>
      <Seo templateTitle="Home" />
      <NavBar />
      <div className='bg-rose-50'>
        <Banner />
      </div>
    </div>
    
  )
}