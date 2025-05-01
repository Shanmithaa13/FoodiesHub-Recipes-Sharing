import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkill";
import QoutrSection from "../components/QuoteSection";
import ChiefsSection from "../components/ChiefsSection";

export default function Home(){
    return(
        <div>
             <HeroSection />
             <ImproveSkills />
             <QoutrSection />
             <ChiefsSection />
        </div>
    )
}