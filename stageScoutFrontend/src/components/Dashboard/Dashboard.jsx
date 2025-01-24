import HeroSection from "./HeroSection"
import FeatureSection from "./featureSection"
import Footer from './Footer'

function Dashboard(){
    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <HeroSection />
            <FeatureSection />
            <Footer />
        </div>
    )
}

export default Dashboard