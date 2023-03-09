import '../App.css'
import HTML from "../assets/HTML.png"
import CSS from "../assets/CSS.png"
import JS from "../assets/JS.png"
import REACT from "../assets/REACT.png"
import gitGithub from "../assets/gitGithub.png"
import Tailwind from "../assets/tailwind.png"
import { softSkill } from "../Data/DataSkill"

export function Skills() {
    return (
        <div className="skills-container">
            
            <div className="hard-skills">
                <h1>Hard Skills</h1>
                <img src={HTML} alt="HTML icon" className="skill-icon html-icon" ></img>
                <img src={CSS} alt="CSS icon" className="skill-icon css-icon" />
                <img src={JS} alt="Jsvascript icon" className="skill-icon javascript-icon" /> <br />
                <img src={REACT} alt="React icon" className="skill-icon react-icon" />
                <img src={gitGithub} alt="Git and Github icon" className="skill-icon git-github-icon" />

                <div className='frameworks-soft-skills-container'>
                    <div className="frameworks">
                        <h1>Framework</h1>
                        <img src={Tailwind} alt="Tailwind icon" className="skill-icon tailwind-icon" />
                    </div>
                    {softSkill.map((data, index) => {
                        return (
                            <div className="soft-skills" key={index}>
                                <h1>Soft Skill</h1>
                                <p>&#176; {data.title[0]}</p>
                                <p>&#176; {data.title[1]}</p>
                                <p>&#176; {data.title[2]}</p>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}