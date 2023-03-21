import AboutMe from "./components/about-me"
import { aboutMe } from "../data/page-data"
import { skills } from "../data/page-data"
import Skills from "./components/skills"
import { portfolio } from "../data/page-data"
import Portfolio from "./components/portfolio"


export default function page(){
    return <div>
        <div>
            <AboutMe data={aboutMe}/>
            <Skills data={skills} />
            <Portfolio data={portfolio}/>
        </div>
    </div>
}