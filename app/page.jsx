import AboutMe from "./components/about-me"
import { aboutMe } from "../data/page-data"
import Skills from "./components/skills"

export default function page(){
    return <div>
        <div>
            <AboutMe data={aboutMe}/>
            <Skills/>
        </div>
    </div>
}