import Seo from "../Seo";
import NavBar from "../components/landing-page/NavBar";
import Banner from "../components/landing-page/Banner";
import Statistics from "../components/landing-page/Statistics";
import Programs from "../components/landing-page/Programs";
import Footer from "../components/landing-page/Footer";
import Steps from "../components/landing-page/Steps";
import Team from "../components/landing-page/Team";

export default function Home() {
  return (
    <div>
      <Seo templateTitle="Home" />
      <NavBar />
      <div className=''>
        <Banner />
        <Statistics />
        <Programs />
        <Steps />
        <Team />
        <Footer />
      </div>
    </div>
    
  )
}